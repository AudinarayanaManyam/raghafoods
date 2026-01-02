import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Mark this as a dynamic route - must be at the top
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Review type interface
interface ReviewData {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  location: string | null;
  verifiedPurchase: boolean;
  helpfulVotes: number;
  totalVotes: number;
  createdAt: string;
}

// Path to the reviews JSON file
function getReviewsFilePath(): string {
  return path.join(process.cwd(), 'public', 'data', 'reviews.json');
}

// Read reviews from JSON file
async function readReviews(): Promise<ReviewData[]> {
  try {
    const filePath = getReviewsFilePath();
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent) as { reviews: ReviewData[] };
    return data.reviews || [];
  } catch (error) {
    console.error('[Read Reviews Error]', error);
    return [];
  }
}

// Write reviews to JSON file
async function writeReviews(reviews: ReviewData[]) {
  try {
    const filePath = getReviewsFilePath();
    const data = { reviews };
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log('[Write Reviews] Successfully saved to JSON file');
  } catch (error) {
    console.error('[Write Reviews Error]', error);
    throw error;
  }
}

interface ReviewPayload {
  productId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  userId?: string;
  location?: string;
  verifiedPurchase?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: ReviewPayload = await request.json();

    console.log('[POST Review] Received review:', body);

    // Validation
    const errors: string[] = [];
    if (!body.productId?.trim()) errors.push('Product ID required');
    if (!body.userName?.trim()) errors.push('User name required');
    if (!body.title?.trim()) errors.push('Title required');
    if (!body.content?.trim()) errors.push('Content required');
    if (!body.rating || body.rating < 1 || body.rating > 5) {
      errors.push('Rating must be 1-5');
    }

    if (errors.length > 0) {
      console.log('[POST Review] Validation errors:', errors);
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Read existing reviews from JSON file
    const reviews = await readReviews();

    // Create new review
    const newReview = {
      id: `review_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      productId: body.productId.trim(),
      userId: body.userId || `user_${Date.now()}`,
      userName: body.userName.trim(),
      rating: body.rating,
      title: body.title.trim(),
      content: body.content.trim(),
      location: body.location?.trim() || null,
      verifiedPurchase: body.verifiedPurchase || false,
      helpfulVotes: 0,
      totalVotes: 0,
      createdAt: new Date().toISOString(),
    };

    // Add to reviews array
    reviews.push(newReview);

    // Write back to JSON file
    await writeReviews(reviews);

    console.log(`[POST Review] Review stored successfully. Total reviews: ${reviews.length}`);

    return NextResponse.json(
      {
        success: true,
        message: 'Review submitted successfully',
        review: newReview,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[POST Review Error]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit review',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const productId = searchParams.get('productId');
    const sortBy = searchParams.get('sortBy') || 'newest';
    const filterRating = searchParams.get('filterRating');

    console.log(`[GET Reviews] productId=${productId}, sortBy=${sortBy}, filterRating=${filterRating}`);

    if (!productId) {
      return NextResponse.json(
        { success: false, error: 'Product ID required' },
        { status: 400 }
      );
    }

    // Read reviews from JSON file
    const allReviews = await readReviews();
    console.log(`[GET Reviews] Total reviews in file: ${allReviews.length}`);

    // Get reviews for product
    let reviews: ReviewData[] = allReviews.filter(
      (r: ReviewData) => r.productId === productId
    );

    console.log(`[GET Reviews] Found ${reviews.length} reviews for product ${productId}`);

    // Filter by rating
    if (filterRating) {
      const rating = parseInt(filterRating);
      if (!isNaN(rating)) {
        reviews = reviews.filter((r: ReviewData) => r.rating === rating);
      }
    }

    // Sort
    reviews.sort((a: ReviewData, b: ReviewData) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        case 'helpful':
          return (b.helpfulVotes / Math.max(b.totalVotes, 1)) -
                 (a.helpfulVotes / Math.max(a.totalVotes, 1));
        case 'newest':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

    // Calculate summary
    const summary = {
      averageRating:
        reviews.length > 0
          ? reviews.reduce((sum: number, r: ReviewData) => sum + r.rating, 0) / reviews.length
          : 0,
      totalReviews: reviews.length,
      ratingBreakdown: {
        1: reviews.filter((r: ReviewData) => r.rating === 1).length,
        2: reviews.filter((r: ReviewData) => r.rating === 2).length,
        3: reviews.filter((r: ReviewData) => r.rating === 3).length,
        4: reviews.filter((r: ReviewData) => r.rating === 4).length,
        5: reviews.filter((r: ReviewData) => r.rating === 5).length,
      },
    };

    return NextResponse.json(
      {
        success: true,
        data: {
          reviews,
          summary,
          total: reviews.length,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[GET Reviews Error]', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch reviews',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { reviewId, productId, isHelpful } = body;

    if (!reviewId || !productId) {
      return NextResponse.json(
        { success: false, error: 'Review ID and Product ID required' },
        { status: 400 }
      );
    }

    // Read reviews from JSON file
    const reviews = await readReviews();

    // Find the review
    const review = reviews.find((r: ReviewData) => r.id === reviewId && r.productId === productId);

    if (!review) {
      return NextResponse.json(
        { success: false, error: 'Review not found' },
        { status: 404 }
      );
    }

    // Update votes
    if (isHelpful) {
      review.helpfulVotes++;
    }
    review.totalVotes++;

    // Write updated reviews back to JSON file
    await writeReviews(reviews);

    return NextResponse.json(
      {
        success: true,
        message: 'Vote recorded',
        review,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Vote error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to record vote',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
