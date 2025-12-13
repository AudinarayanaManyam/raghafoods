export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  // videoUrl?: string;
  additionalImages?: string[];
  additionalVideos?: string[];
  

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
    image: '/products/mango-pickle-6.jpg',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      
      '/products/dummy.png',
      '/products/dummy.png'
    ],
    // additionalVideos: [
    //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    // ],
    tags: ['spicy', 'traditional', 'andhra style', 'veg'],
    
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
    name: 'Lime Pickle',
    description: 'Spicy Lime Pickle with a perfect blend of spices',
    category: 'Pickles',
    image: '/products/lime-pickle-12.jpg',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/dummy.png',
      '/products/dummy.png',
      
    ],
    // additionalVideos: [
    //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    // ],
    tags: ['mixed veg', 'spicy', 'traditional', 'veg'],
   
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
    image: '/products/GonguraRedChilli_2.png',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/dummy.png',
      '/products/dummy.png'
    ],
    tags: ['gongura', 'andhra style', 'traditional', 'veg'],
    
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
    image: '/products/dosa.png',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/dosa12 (1).png',
      '/products/dosa12 (2).png',
      
    ],
    // additionalVideos: [
    //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    // ],
    tags: ['fresh', 'fermented', 'breakfast', 'veg'],
    
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
    image: '/products/idli-batter.png',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/idly1 (1).png',
      '/products/idly1 (2).png',
    
    ],
    // additionalVideos: [
    //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    // ],
    tags: ['fresh', 'fermented', 'breakfast', 'veg'],
    
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
    name: 'Idli Dosa Batter',
    description: 'Idli Dosa Batter prepared with perfect proportions for soft and fluffy idlis',
    category: 'Batters',
    image: '/products/idd.png',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/idlydosa1 (1).png',
      '/products/idlydosa1 (2).png',
      
    ],
    // additionalVideos: [
    //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    // ],
    tags: ['fresh', 'fermented', 'breakfast', 'veg'],
    
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
   id: '7',
    name: 'ragi Dosa Batter',
    description: 'ragi Dosa Batter prepared with perfect proportions for soft and fluffy ragi',
    category: 'Batters',
    image: '/products/ragidosa.png',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/dosa1.png',
      '/products/dosa2.png',
      
    ],
    // additionalVideos: [
    //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    // ],
    tags: ['fresh', 'fermented', 'breakfast', 'veg'],
    
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
    id: '8',
    name: 'Sambar Powder',
    description: 'Sambar Powder made with roasted spices and lentils',
    category: 'Powders',
    image: '/products/Sambar-Powder-Recipe.jpg',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/dummy.png',
      '/products/dummy.png',
      
    ],
    // additionalVideos: [
    //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    // ],
    tags: ['spices', 'blend', 'authentic'],
    
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
    id: '9',
    name: 'Rasam Powder',
    description: 'Rasam Powder blended with handpicked spices for authentic taste',
    category: 'Powders',
    image: '/products/rasam-powder-recipe-1.jpg',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/dummy.png',
      '/products/dummy.png',
      
    ],
    // additionalVideos: [
    //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    // ],
    tags: ['spices', 'blend', 'authentic'],
    
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
    id: '10',
    name: 'Curry Powder',
    description: 'Special Curry Powder perfect for vegetable and meat dishes',
    category: 'Powders',
    image: '/products/curry-powder.jpg',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/dummy.png',
      '/products/dummy.png',

    ],
    // additionalVideos: [
    //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    // ],
    tags: ['spices', 'blend', 'versatile'],
    
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
    id: '11',
    name: 'Chicken Pickle',
    description: 'Authentic Andhra Chicken Pickle made with traditional spices and pure oil',
    category: 'Pickles',
    image: '/products/chicken-pickle.jpg',
    // videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    additionalImages: [
      '/products/dummy.png',
      '/products/dummy.png',
      '/products/dummy.png'
    ],
    // additionalVideos: [
    //   'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    // ],
    tags: ['spicy', 'traditional', 'andhra style', 'non-veg'],
    
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





