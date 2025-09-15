export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  verifiedPurchase: boolean;
  helpfulVotes: number;
  totalVotes: number;
  createdAt: string;
  updatedAt?: string;
  location?: string;
  reviewerRank?: string;
  vine?: boolean; // Amazon Vine program equivalent
  earlyReviewer?: boolean;
}

export interface ReviewSummary {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: { [key: number]: number };
}

// Sample review data
export const reviews: Review[] = [
  {
    id: '1',
    productId: 'mango-pickle',
    userId: 'user1',
    userName: 'Priya S.',
    userAvatar: '/avatars/user1.jpg',
    rating: 5,
    title: 'Absolutely delicious!',
    content: 'This mango pickle tastes just like my grandmother used to make. The perfect balance of sweet, sour, and spicy. The mangoes are fresh and the oil quality is excellent. Will definitely order again!',
    images: ['/reviews/mango-pickle-review1.jpg'],
    verifiedPurchase: true,
    helpfulVotes: 23,
    totalVotes: 26,
    createdAt: '2024-01-15T10:30:00Z',
    location: 'Chennai, India',
    reviewerRank: '#1,245 in Food Reviews'
  },
  {
    id: '2',
    productId: 'mango-pickle',
    userId: 'user2',
    userName: 'Rajesh K.',
    rating: 4,
    title: 'Good quality pickle',
    content: 'Good taste and quality. The pickle arrived well-packaged and fresh. Only complaint is that it could be a bit more spicy for my taste, but overall very satisfied with the purchase.',
    verifiedPurchase: true,
    helpfulVotes: 15,
    totalVotes: 18,
    createdAt: '2024-01-10T14:20:00Z',
    location: 'Bangalore, India',
    vine: true
  },
  {
    id: '3',
    productId: 'mango-pickle',
    userId: 'user3',
    userName: 'Meera A.',
    rating: 5,
    title: 'Authentic taste!',
    content: 'Finally found a pickle that tastes authentic! No artificial preservatives, just pure traditional taste. My family loves it and we have already placed our second order.',
    verifiedPurchase: true,
    helpfulVotes: 31,
    totalVotes: 33,
    createdAt: '2024-01-08T09:15:00Z',
    location: 'Mumbai, India',
    earlyReviewer: true
  },
  {
    id: '4',
    productId: 'idly-batter',
    userId: 'user4',
    userName: 'Ananya M.',
    rating: 5,
    title: 'Perfect for busy mornings',
    content: 'This idly batter is a lifesaver for busy weekday mornings. The consistency is perfect and the idlies come out fluffy and soft every time. Great quality and saves so much time!',
    verifiedPurchase: true,
    helpfulVotes: 18,
    totalVotes: 20,
    createdAt: '2024-01-12T07:45:00Z',
    location: 'Hyderabad, India'
  },
  {
    id: '5',
    productId: 'sambar-powder',
    userId: 'user5',
    userName: 'Venkat R.',
    rating: 4,
    title: 'Good spice blend',
    content: 'The sambar powder has a good aroma and authentic taste. Made sambar yesterday and the family loved it. The spice level is just right - not too mild, not too hot.',
    verifiedPurchase: true,
    helpfulVotes: 12,
    totalVotes: 14,
    createdAt: '2024-01-05T16:30:00Z',
    location: 'Delhi, India',
    reviewerRank: '#856 in Spice Reviews'
  },
  {
    id: '6',
    productId: 'dosa-batter',
    userId: 'user6',
    userName: 'Kavya P.',
    rating: 5,
    title: 'Amazing quality!',
    content: 'The dosa batter is perfectly fermented and makes crispy, golden dosas every time. The consistency is just right and it spreads beautifully on the pan.',
    verifiedPurchase: true,
    helpfulVotes: 8,
    totalVotes: 10,
    createdAt: '2024-01-20T12:15:00Z',
    location: 'Coimbatore, India'
  }
];

// Helper functions
export const getReviewsForProduct = (productId: string): Review[] => {
  return reviews.filter(review => review.productId === productId);
};

export const getAverageRating = (productId: string): number => {
  const productReviews = getReviewsForProduct(productId);
  if (productReviews.length === 0) return 0;
  
  const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / productReviews.length;
};

export const getReviewCount = (productId: string): number => {
  return getReviewsForProduct(productId).length;
};

export const getReviewSummary = (productId: string): ReviewSummary => {
  const productReviews = getReviewsForProduct(productId);
  const totalReviews = productReviews.length;
  
  if (totalReviews === 0) {
    return {
      averageRating: 0,
      totalReviews: 0,
      ratingBreakdown: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };
  }
  
  const ratingBreakdown = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let totalRating = 0;
  
  productReviews.forEach(review => {
    ratingBreakdown[review.rating as keyof typeof ratingBreakdown]++;
    totalRating += review.rating;
  });
  
  return {
    averageRating: totalRating / totalReviews,
    totalReviews,
    ratingBreakdown
  };
};

export const sortReviews = (reviews: Review[], sortBy: 'newest' | 'oldest' | 'highest' | 'lowest' | 'helpful'): Review[] => {
  const sorted = [...reviews];
  
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    case 'oldest':
      return sorted.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    case 'highest':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'lowest':
      return sorted.sort((a, b) => a.rating - b.rating);
    case 'helpful':
      return sorted.sort((a, b) => b.helpfulVotes - a.helpfulVotes);
    default:
      return sorted;
  }
};

export const filterReviewsByRating = (reviews: Review[], rating: number | null): Review[] => {
  if (rating === null) return reviews;
  return reviews.filter(review => review.rating === rating);
};
