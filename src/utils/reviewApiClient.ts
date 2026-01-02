import { Review } from '@/data/reviews';

export interface ReviewPayload {
  productId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  userId?: string;
  location?: string;
  verifiedPurchase?: boolean;
}

export interface ReviewResponse {
  success: boolean;
  message?: string;
  error?: string;
  review?: Review;
  details?: string[];
}

export interface FetchReviewsResponse {
  success: boolean;
  data?: {
    reviews: Review[];
    summary: {
      averageRating: number;
      totalReviews: number;
      ratingBreakdown: Record<number, number>;
    };
    total: number;
  };
  error?: string;
}

class ReviewApiClient {
  private static instance: ReviewApiClient;

  private constructor() {}

  static getInstance(): ReviewApiClient {
    if (!ReviewApiClient.instance) {
      ReviewApiClient.instance = new ReviewApiClient();
    }
    return ReviewApiClient.instance;
  }

  async submitReview(review: ReviewPayload): Promise<ReviewResponse> {
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        const errorData: { error?: string; errors?: string[] } = {};
        try {
          const parsed = await response.json() as Record<string, unknown>;
          Object.assign(errorData, parsed);
        } catch {
          errorData.error = response.statusText;
        }
        return {
          success: false,
          error: (errorData.error as string) || `HTTP ${response.status}`,
          details: errorData.errors as string[] | undefined,
        };
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  async getReviews(
    productId: string,
    sortBy: string = 'newest',
    filterRating?: number
  ): Promise<FetchReviewsResponse> {
    try {
      const params = new URLSearchParams({
        productId,
        sortBy,
      });

      if (filterRating) {
        params.append('filterRating', filterRating.toString());
      }

      const response = await fetch(`/api/reviews?${params}`, {
        method: 'GET',
      });

      if (!response.ok) {
        const errorData: { error?: string } = {};
        try {
          const parsed = await response.json() as Record<string, unknown>;
          if ('error' in parsed) {
            errorData.error = parsed.error as string;
          }
        } catch {
          errorData.error = response.statusText;
        }
        return {
          success: false,
          error: errorData.error || `HTTP ${response.status}`,
        };
      }

      const data: FetchReviewsResponse = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  async voteHelpful(
    reviewId: string,
    productId: string,
    isHelpful: boolean
  ): Promise<ReviewResponse> {
    try {
      const response = await fetch('/api/reviews', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reviewId,
          productId,
          isHelpful,
        }),
      });

      if (!response.ok) {
        const errorData: { error?: string } = {};
        try {
          const parsed = await response.json() as Record<string, unknown>;
          if ('error' in parsed) {
            errorData.error = parsed.error as string;
          }
        } catch {
          errorData.error = response.statusText;
        }
        return {
          success: false,
          error: errorData.error || `HTTP ${response.status}`,
        };
      }

      const data: ReviewResponse = await response.json();
      return data;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }
}

export default ReviewApiClient.getInstance();
