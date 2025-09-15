export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  videoUrl?: string;
  additionalImages?: string[];
  additionalVideos?: string[];
  
  benefits?: string[];
  ingredients?: string[];
  storageInfo?: string;
  shelfLife?: string;
  tags?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Mango Pickle',
    description: 'Authentic Andhra Mango Pickle made with traditional spices and pure oil',
    category: 'Pickles',
    image: '/products/mango-pickle.jpg',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/mango-pickle.jpg',
      '/categories/mango-pickle.jpg',
      '/categories/pickle.jpg'
    ],
    additionalVideos: [
      'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    ],
    tags: ['spicy', 'traditional', 'andhra style', 'veg'],
    benefits: [
      'Made with fresh, hand-picked mangoes',
      'Traditional Andhra recipe',
      'No artificial preservatives',
      'Rich in antioxidants'
    ],
    ingredients: [
      'Raw Mangoes',
      'Mustard Oil',
      'Red Chili Powder',
      'Salt',
      'Turmeric',
      'Fenugreek Seeds',
      'Mustard Seeds'
    ],
    storageInfo: 'Store in a cool, dry place. Keep away from direct sunlight.',
    shelfLife: '12 months from manufacturing date'
  },
  {
    id: '2',
    name: 'Mixed Vegetable Pickle',
    description: 'Spicy Mixed Vegetable Pickle with a perfect blend of vegetables and spices',
    category: 'Pickles',
    image: '/products/mixed_veg.jpg',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/mixed_veg.jpg',
      '/categories/veg.jpg',
      '/categories/pickle.jpg'
    ],
    additionalVideos: [
      'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    ],
    tags: ['mixed veg', 'spicy', 'traditional', 'veg'],
    benefits: [
      'Mix of fresh vegetables',
      'Traditional recipe',
      'No artificial preservatives',
      'Rich in nutrients'
    ],
    ingredients: [
      'Mixed Vegetables',
      'Mustard Oil',
      'Red Chili Powder',
      'Salt',
      'Turmeric',
      'Spices'
    ],
    storageInfo: 'Store in a cool, dry place. Keep away from direct sunlight.',
    shelfLife: '12 months from manufacturing date'
  },
  {
    id: '3',
    name: 'Gongura Pickle',
    description: 'Homestyle Gongura Pickle, a traditional Andhra delicacy',
    category: 'Pickles',
    image: '/products/gongura.jpg',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/gongura.jpg',
      '/categories/pickle.jpg'
    ],
    tags: ['gongura', 'andhra style', 'traditional', 'veg'],
    benefits: [
      'Made with fresh Gongura leaves',
      'Rich in iron and vitamins',
      'Authentic Andhra taste',
      'No artificial preservatives'
    ],
    ingredients: [
      'Gongura Leaves',
      'Red Chili Powder',
      'Salt',
      'Garlic',
      'Oil',
      'Spices'
    ],
    storageInfo: 'Store in a cool, dry place. Keep away from direct sunlight.',
    shelfLife: '12 months from manufacturing date'
  },
  {
    id: '4',
    name: 'Dosa Batter',
    description: 'Fresh ground Dosa Batter made with premium rice and urad dal',
    category: 'Batters',
    image: '/products/dosa-batter.jpg',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/dosa-batter.jpg',
      '/categories/Batters.jpg',
      '/categories/veg.jpg'
    ],
    additionalVideos: [
      'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    ],
    tags: ['fresh', 'fermented', 'breakfast', 'veg'],
    benefits: [
      'Freshly ground daily',
      'Perfect fermentation',
      'No preservatives',
      'Ready to use'
    ],
    ingredients: [
      'Rice',
      'Urad Dal',
      'Fenugreek Seeds',
      'Salt'
    ],
    storageInfo: 'Keep refrigerated at 4°C',
    shelfLife: '3 days from manufacturing date'
  },
  {
    id: '5',
    name: 'Idli Batter',
    description: 'Idli Batter prepared with perfect proportions for soft and fluffy idlis',
    category: 'Batters',
    image: '/products/idly.jpg',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/idly.jpg',
      '/categories/Batters.jpg',
      '/categories/veg.jpg'
    ],
    additionalVideos: [
      'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    ],
    tags: ['fresh', 'fermented', 'breakfast', 'veg'],
    benefits: [
      'Freshly ground daily',
      'Perfect consistency',
      'No preservatives',
      'Ready to use'
    ],
    ingredients: [
      'Rice',
      'Urad Dal',
      'Fenugreek Seeds',
      'Salt'
    ],
    storageInfo: 'Keep refrigerated at 4°C',
    shelfLife: '3 days from manufacturing date'
  },
  {
    id: '6',
    name: 'Sambar Powder',
    description: 'Sambar Powder made with roasted spices and lentils',
    category: 'Powders',
    image: '/products/sambar.jpg',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/sambar.jpg',
      '/categories/powders.jpg',
      '/categories/veg.jpg'
    ],
    additionalVideos: [
      'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    ],
    tags: ['spices', 'blend', 'authentic'],
    benefits: [
      'Freshly ground spices',
      'Traditional recipe',
      'No artificial additives',
      'Rich aroma'
    ],
    ingredients: [
      'Coriander',
      'Red Chilies',
      'Turmeric',
      'Cumin',
      'Fenugreek',
      'Black Pepper',
      'Curry Leaves'
    ],
    storageInfo: 'Store in an airtight container in a cool, dry place',
    shelfLife: '6 months from manufacturing date'
  },
  {
    id: '7',
    name: 'Rasam Powder',
    description: 'Rasam Powder blended with handpicked spices for authentic taste',
    category: 'Powders',
    image: '/products/rasam.jpg',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/rasam.jpg',
      '/categories/powders.jpg',
      '/categories/veg.jpg'
    ],
    additionalVideos: [
      'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    ],
    tags: ['spices', 'blend', 'authentic'],
    benefits: [
      'Perfect blend of spices',
      'Traditional recipe',
      'No artificial additives',
      'Rich in flavor'
    ],
    ingredients: [
      'Black Pepper',
      'Cumin',
      'Coriander',
      'Red Chilies',
      'Garlic',
      'Curry Leaves'
    ],
    storageInfo: 'Store in an airtight container in a cool, dry place',
    shelfLife: '6 months from manufacturing date'
  },
  {
    id: '8',
    name: 'Curry Powder',
    description: 'Special Curry Powder perfect for vegetable and meat dishes',
    category: 'Powders',
    image: '/products/curry.jpg',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/curry.jpg',
      '/categories/powders.jpg',
      '/categories/veg.jpg'
    ],
    additionalVideos: [
      'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    ],
    tags: ['spices', 'blend', 'versatile'],
    benefits: [
      'Versatile blend',
      'Rich aroma',
      'No artificial additives',
      'Perfect for multiple dishes'
    ],
    ingredients: [
      'Coriander',
      'Cumin',
      'Turmeric',
      'Red Chilies',
      'Black Pepper',
      'Cardamom',
      'Cinnamon'
    ],
    storageInfo: 'Store in an airtight container in a cool, dry place',
    shelfLife: '6 months from manufacturing date'
  },
  {
    id: '9',
    name: 'Chicken Pickle',
    description: 'Authentic Andhra Chicken Pickle made with traditional spices and pure oil',
    category: 'Pickles',
    image: '/products/chicken.jpg',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/chicken.jpg',
      '/categories/Non-Veg.jpg',
      '/categories/pickle.jpg'
    ],
    additionalVideos: [
      'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    ],
    tags: ['spicy', 'traditional', 'andhra style', 'non-veg'],
    benefits: [
      'Made with fresh, hand-picked Chicken',
      'Traditional Andhra recipe',
      'No artificial preservatives',
      'Rich in antioxidants'
    ],
    ingredients: [
      'Chicken',
      'Mustard Oil',
      'Red Chili Powder',
      'Salt',
      'Turmeric',
      'Fenugreek Seeds',
      'Mustard Seeds'
    ],
    storageInfo: 'Store in a cool, dry place. Keep away from direct sunlight.',
    shelfLife: '12 months from manufacturing date'
  },

];





