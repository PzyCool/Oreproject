export const seedProducts = [
  {
    id: 'cake-1',
    name: 'Red Velvet Cake',
    category: 'cakes',
    price: 25000,
    description: 'Moist red velvet cake with cream cheese frosting',
    image: 'https://i.pinimg.com/1200x/3f/90/ee/3f90eee40aa3f68b34a2088298782c2f.jpg',
    options: { sizes: ['6-inch', '8-inch', '10-inch'], flavors: ['Classic Red Velvet', 'Chocolate Red Velvet'], customMessage: true },
    stock: true, featured: true, popular: true, isPopular: true
  },
  {
    id: 'cake-2',
    name: 'Chocolate Fudge Cake',
    category: 'cakes',
    price: 22000,
    description: 'Rich chocolate cake with chocolate ganache',
    image: 'https://i.pinimg.com/1200x/25/54/24/255424feb363ec714442cf645cec757d.jpg',
    options: { sizes: ['6-inch', '8-inch', '10-inch'], flavors: ['Dark Chocolate', 'Milk Chocolate'], customMessage: true },
    stock: true, featured: false, popular: true, isPopular: true
  },
  {
    id: 'donut-1',
    name: 'Glazed Donuts (6-pack)',
    category: 'donuts',
    price: 3500,
    description: 'Classic glazed donuts',
    image: 'https://i.pinimg.com/1200x/ec/6a/e8/ec6ae80a4c517ac63bd15aa9e8952248.jpg',
    options: {},
    stock: true, featured: true, popular: true, isPopular: true
  },
  {
    id: 'donut-2',
    name: 'Chocolate Sprinkled Donuts',
    category: 'donuts',
    price: 4000,
    description: 'Chocolate donuts with colorful sprinkles',
    image: 'https://i.pinimg.com/736x/31/53/bf/3153bf66a463d79b8c1aae3b8c0c13f0.jpg',
    options: {},
    stock: true, featured: false, popular: true, isPopular: true
  },
  {
    id: 'drink-1',
    name: 'Fresh Orange Juice (1L)',
    category: 'drinks',
    price: 2000,
    description: 'Freshly squeezed orange juice',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&h=400&fit=crop',
    options: {},
    stock: true, featured: false, popular: true, isPopular: true
  },
  {
    id: 'pastry-1',
    name: 'Croissants (4-pack)',
    category: 'pastries',
    price: 2800,
    description: 'Buttery, flaky croissants',
    image: 'https://i.pinimg.com/736x/6e/98/8b/6e988bc5b741808a21419d20e7c35f01.jpg',
    options: {},
    stock: true, featured: false, popular: true, isPopular: false
  },
  {
    id: 'cake-3',
    name: 'Vanilla Buttercream Cake',
    category: 'cakes',
    price: 18000,
    description: 'Soft vanilla sponge with buttercream',
    image: 'https://i.pinimg.com/1200x/4c/09/19/4c0919fc733981b0bdc947b366e22352.jpg',
    options: { sizes: ['6-inch', '8-inch', '10-inch'], flavors: ['Classic Vanilla', 'Vanilla Almond'], customMessage: true },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'cake-4',
    name: 'Carrot Cake',
    category: 'cakes',
    price: 20000,
    description: 'Spiced carrot cake with walnuts',
    image: 'https://i.pinimg.com/736x/f9/9a/98/f99a98d365506114603a197efd199ea0.jpg',
    options: { sizes: ['6-inch', '8-inch'], flavors: ['Classic Carrot'], customMessage: true },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'cake-5',
    name: 'Fruit Cake',
    category: 'cakes',
    price: 30000,
    description: 'Rich traditional fruit cake',
    image: 'https://i.pinimg.com/736x/f7/65/43/f76543bdb3689e75f4845e5490cbfba4.jpg',
    options: { sizes: ['8-inch', '10-inch'], flavors: ['Classic Fruit'], customMessage: true },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'cake-6',
    name: 'Strawberry Shortcake',
    category: 'cakes',
    price: 23000,
    description: 'Vanilla sponge with fresh strawberries',
    image: 'https://i.pinimg.com/736x/d4/e3/3d/d4e33d6d2e1976b8ce6e78d2db515a8d.jpg',
    options: { sizes: ['6-inch', '8-inch'], flavors: ['Strawberry Vanilla'], customMessage: true },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'cake-7',
    name: 'Lemon Drizzle Cake',
    category: 'cakes',
    price: 19000,
    description: 'Moist lemon sponge with lemon syrup',
    image: 'https://i.pinimg.com/736x/ee/4e/91/ee4e91c207b16d877c6c9bcdbfa27c40.jpg',
    options: { sizes: ['6-inch', '8-inch'], flavors: ['Classic Lemon'], customMessage: true },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'donut-3',
    name: 'Filled Donuts (6-pack)',
    category: 'donuts',
    price: 4500,
    description: 'Cream-filled donuts',
    image: 'https://i.pinimg.com/1200x/e9/60/06/e9600697ea1889c39bd1daf848d67a14.jpg',
    options: {},
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'doughnut-4',
    name: 'Jam-Filled Doughnut',
    category: 'donuts',
    price: 3500,
    description: 'Soft donut filled with strawberry jam',
    image: 'https://i.pinimg.com/736x/0b/e0/b1/0be0b1a8d4b147e61cb5c5958ec879df.jpg',
    options: {},
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'pastry-2',
    name: 'Meat Pie',
    category: 'pastries',
    price: 3500,
    description: 'Flaky pastry with seasoned beef',
    image: 'https://i.pinimg.com/1200x/f4/a4/3c/f4a43ccb5ffb4fb0b7bd0bea053d85c2.jpg',
    options: { quantities: ['Single', 'Pack of 6', 'Pack of 12'], fillings: ['Beef'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'pastry-3',
    name: 'Chicken Pie',
    category: 'pastries',
    price: 3800,
    description: 'Buttery pastry with creamy chicken',
    image: 'https://i.pinimg.com/736x/13/51/14/135114137f160a0ed80ebd0d9c6a6b39.jpg',
    options: { quantities: ['Single', 'Pack of 6', 'Pack of 12'], fillings: ['Chicken'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'pastry-4',
    name: 'Scotch Egg',
    category: 'pastries',
    price: 3000,
    description: 'Boiled egg wrapped in spiced meat',
    image: 'https://i.pinimg.com/736x/27/dd/ee/27ddeec66fc6200902771e30325beea8.jpg',
    options: { quantities: ['Single', 'Pack of 6', 'Pack of 12'], fillings: ['Egg & Beef'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'pastry-5',
    name: 'Sausage Roll',
    category: 'pastries',
    price: 2500,
    description: 'Soft baked roll with sausage meat',
    image: 'https://i.pinimg.com/1200x/07/97/e8/0797e8dd750ac65bcc84313fdc005a86.jpg',
    options: { quantities: ['Single', 'Pack of 6', 'Pack of 12'], fillings: ['Sausage'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'pastry-6',
    name: 'Chicken Shawarma',
    category: 'shawarma',
    price: 5500,
    description: 'Grilled chicken in flatbread',
    image: 'https://i.pinimg.com/1200x/fa/5c/65/fa5c658d50ed6d70cbe5ce419029f518.jpg',
    options: { sizes: ['Regular', 'Large'], proteins: ['Chicken'], addOns: ['Extra Chicken', 'Cheese', 'Fries'], spiceLevel: ['Mild', 'Medium', 'Hot'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'pastry-7',
    name: 'Beef Shawarma',
    category: 'shawarma',
    price: 6000,
    description: 'Juicy spiced beef in flatbread',
    image: 'https://i.pinimg.com/1200x/d4/4a/d5/d44ad564be429e615c01557675842585.jpg',
    options: { sizes: ['Regular', 'Large'], proteins: ['Beef'], addOns: ['Extra Beef', 'Cheese', 'Fries'], spiceLevel: ['Mild', 'Medium', 'Hot'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'pastry-8',
    name: 'Chicken Cheese Steak',
    category: 'cheese-steak',
    price: 6800,
    description: 'Grilled chicken with melted cheese',
    image: 'https://images.unsplash.com/photo-1585238342028-4d1e9f1f9d5d?w=500&h=400&fit=crop',
    options: { sizes: ['Regular', 'Footlong'], cheeses: ['Cheddar', 'Mozzarella'], addOns: ['Extra Chicken', 'Caramelized Onions', 'Bell Peppers'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'bread-1',
    name: 'Sourdough Loaf',
    category: 'bread',
    price: 1500,
    description: 'Artisanal sourdough with crispy crust',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=400&fit=crop',
    options: {},
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'bread-2',
    name: 'Whole Wheat Bread',
    category: 'breads',
    price: 2800,
    description: 'Healthy whole wheat bread',
    image: 'https://i.pinimg.com/1200x/0f/d2/a4/0fd2a4a128344aeec6ce8ba8ca518842.jpg',
    options: { loafSize: ['Small Loaf', 'Medium Loaf', 'Large Loaf'], sliceType: ['Sliced', 'Unsliced'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'bread-3',
    name: 'White Sandwich Bread',
    category: 'breads',
    price: 2500,
    description: 'Soft fluffy white bread',
    image: 'https://i.pinimg.com/736x/f9/e5/5c/f9e55c71ff97e1e681a8c473a1614477.jpg',
    options: { loafSize: ['Small Loaf', 'Medium Loaf', 'Large Loaf'], sliceType: ['Sliced', 'Unsliced'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'bread-4',
    name: 'Butter Bread',
    category: 'breads',
    price: 3300,
    description: 'Soft bread enriched with butter',
    image: 'https://i.pinimg.com/1200x/cf/e1/ec/cfe1ecf4802ace8cecd85bf9c3088d4c.jpg',
    options: { loafSize: ['Small Loaf', 'Medium Loaf'], sliceType: ['Sliced', 'Unsliced'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'bread-5',
    name: 'Coconut Bread',
    category: 'breads',
    price: 3500,
    description: 'Sweet bread with coconut',
    image: 'https://i.pinimg.com/1200x/08/8f/f7/088ff76a55973023703c54fd1946d887.jpg',
    options: { loafSize: ['Small Loaf', 'Medium Loaf'], sliceType: ['Sliced', 'Unsliced'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'smallchop-1',
    name: 'Spring Rolls (6-pack)',
    category: 'pastries',
    price: 2600,
    description: 'Crispy vegetable rolls',
    image: 'https://i.pinimg.com/1200x/ac/b3/bb/acb3bb4a553583542d85b70b5ebc09c8.jpg',
    options: {},
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'smallchop-2',
    name: 'Samosas (6-pack)',
    category: 'small-chops',
    price: 4500,
    description: 'Crispy pastries with spiced potatoes',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=400&fit=crop',
    options: {},
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'smallchop-3',
    name: 'Puff Puff',
    category: 'small-chops',
    price: 2000,
    description: 'Soft deep-fried dough balls',
    image: 'https://i.pinimg.com/1200x/3d/a9/dd/3da9dd02d13dcf4d9c8e4e0c6b04a25a.jpg',
    options: {},
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'smallchop-4',
    name: 'Honey Coated Wings',
    category: 'small-chops',
    price: 6500,
    description: 'Crispy chicken wings in honey glaze',
    image: 'https://i.pinimg.com/1200x/e6/e6/a3/e6e6a36b4506f799abeb7e71779a98ca.jpg',
    options: { portions: ['6 Pieces', '12 Pieces', '24 Pieces'], spiceLevel: ['Mild'], addOns: ['Extra Sauce', 'Fries'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'smallchop-5',
    name: 'Peppered Wings',
    category: 'small-chops',
    price: 6500,
    description: 'Spicy Nigerian-style wings',
    image: 'https://i.pinimg.com/1200x/ad/59/64/ad596453d5c2e52972934d5392773278.jpg',
    options: { portions: ['6 Pieces', '12 Pieces', '24 Pieces'], spiceLevel: ['Medium', 'Hot', 'Extra Hot'], addOns: ['Extra Pepper Sauce', 'Fries'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'smallchop-6',
    name: 'Peppered Snail',
    category: 'small-chops',
    price: 8000,
    description: 'Tender snail in pepper sauce',
    image: 'https://i.pinimg.com/1200x/c0/ae/46/c0ae46de4bcfc63a538150f714364fc0.jpg',
    options: { portions: ['Small Bowl', 'Medium Bowl', 'Large Bowl'], spiceLevel: ['Medium', 'Hot', 'Extra Hot'], addOns: ['Extra Pepper Sauce'], customMessage: false },
    stock: true, featured: false, popular: false, isPopular: false
  },
  // Nigerian Food Products
  {
    id: 'ng-food-1',
    name: 'Egusi Soup (Large)',
    category: 'soups',
    price: 4500,
    description: 'Ground melon seed soup with pounded yam',
    image: 'https://i.pinimg.com/1200x/9f/8a/6e/9f8a6e92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { sizes: ['Small', 'Medium', 'Large'], withSwallow: ['Pounded Yam', 'Fufu', 'Garri', 'None'] },
    stock: true, featured: true, popular: true, isPopular: false
  },
  {
    id: 'ng-food-2',
    name: 'Ogbono Soup (Large)',
    category: 'soups',
    price: 4200,
    description: 'Wild mango seed soup with fufu',
    image: 'https://i.pinimg.com/1200x/8g/9b/7c/8g9b7c92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { sizes: ['Small', 'Medium', 'Large'], withSwallow: ['Pounded Yam', 'Fufu', 'Garri', 'None'] },
    stock: true, featured: true, popular: true, isPopular: false
  },
  {
    id: 'ng-food-3',
    name: 'Jollof Rice (Per Plate)',
    category: 'rice-dishes',
    price: 2500,
    description: 'Classic Nigerian jollof rice with chicken',
    image: 'https://i.pinimg.com/1200x/6i/1d/9e/6i1d9e92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { protein: ['Chicken', 'Beef', 'Fish', 'None'], sides: ['Plantain', 'Coleslaw', 'None'] },
    stock: true, featured: true, popular: true, isPopular: false
  },
  {
    id: 'ng-food-4',
    name: 'Coconut Rice (Per Plate)',
    category: 'rice-dishes',
    price: 2800,
    description: 'Aromatic coconut rice with grilled chicken',
    image: 'https://i.pinimg.com/1200x/5j/2e/af/5j2eaf92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { protein: ['Chicken', 'Beef', 'Fish', 'None'], sides: ['Plantain', 'Coleslaw', 'None'] },
    stock: true, featured: true, popular: true, isPopular: false
  },
  {
    id: 'ng-food-5',
    name: 'Fried Rice (Per Plate)',
    category: 'rice-dishes',
    price: 3000,
    description: 'Nigerian-style fried rice with vegetables',
    image: 'https://i.pinimg.com/1200x/4k/3f/be/4k3fbe92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { protein: ['Chicken', 'Beef', 'Shrimp', 'None'], sides: ['Plantain', 'Coleslaw', 'None'] },
    stock: true, featured: true, popular: true, isPopular: false
  },
  {
    id: 'ng-food-6',
    name: 'Pounded Yam',
    category: 'swallows',
    price: 1500,
    description: 'Smooth pounded yam (no soup)',
    image: 'https://i.pinimg.com/1200x/3l/4g/cd/3l4gcd92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { portion: ['Single', 'Double'] },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'ng-food-7',
    name: 'Fufu (2 Pack)',
    category: 'swallows',
    price: 1200,
    description: 'Cassava fufu (no soup)',
    image: 'https://i.pinimg.com/1200x/2m/5h/de/2m5hde92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { portion: ['2 pieces', '4 pieces', '6 pieces'] },
    stock: true, featured: false, popular: false, isPopular: false
  },
  {
    id: 'ng-food-8',
    name: 'Grilled Catfish (Whole)',
    category: 'proteins',
    price: 5500,
    description: 'Whole grilled catfish with spices',
    image: 'https://i.pinimg.com/1200x/1n/6i/ef/1n6ief92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { size: ['Small', 'Medium', 'Large'], spiceLevel: ['Mild', 'Medium', 'Hot'] },
    stock: true, featured: true, popular: true, isPopular: false
  },
  {
    id: 'ng-food-9',
    name: 'Grilled Chicken (Full)',
    category: 'proteins',
    price: 6500,
    description: 'Full grilled chicken with spicy marinade',
    image: 'https://i.pinimg.com/1200x/0o/7j/fg/0o7jfg92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { size: ['Half', 'Full'], spiceLevel: ['Mild', 'Medium', 'Hot'] },
    stock: true, featured: true, popular: true, isPopular: false
  },
  {
    id: 'ng-food-10',
    name: 'Peppered Beef (500g)',
    category: 'proteins',
    price: 4000,
    description: 'Spicy grilled beef with Nigerian spices',
    image: 'https://i.pinimg.com/1200x/9p/8k/hi/9p8khi92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { portion: ['250g', '500g', '1kg'], spiceLevel: ['Mild', 'Medium', 'Hot'] },
    stock: true, featured: true, popular: true, isPopular: false
  },
  {
    id: 'ng-food-11',
    name: 'Ofada Rice with Sauce',
    category: 'nigerian-food',
    price: 3500,
    description: 'Local Ofada rice with spicy beef sauce',
    image: 'https://i.pinimg.com/1200x/8q/9l/mn/8q9lmn92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { protein: ['Beef', 'Chicken', 'Fish'] },
    stock: true, featured: true, popular: true, isPopular: false
  },
  {
    id: 'ng-food-12',
    name: 'Banga Soup with Starch',
    category: 'nigerian-food',
    price: 4800,
    description: 'Palm fruit soup with starch',
    image: 'https://i.pinimg.com/1200x/7r/0s/no/7r0sno92e3d7a5e5a9e5a9e5a9e5a9e5a.jpg',
    options: { sizes: ['Small', 'Medium', 'Large'], withSwallow: ['Starch', 'Fufu', 'None'] },
    stock: true, featured: true, popular: true, isPopular: false
  }
];

export const seedRecipes = [
  {
    id: 'recipe-1',
    title: 'Classic Chocolate Chip Cookies',
    price: 2500,
    difficulty: 'Beginner',
    prepTime: '15 mins',
    cookTime: '12 mins',
    yield: '24 cookies',
    tags: ['beginner', 'cookies', 'chocolate'],
    heroImage: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop',
    previewText: 'Perfect chewy chocolate chip cookies.',
    lockedContent: {
      ingredients: ['2 1/4 cups flour', '1 tsp baking soda', '1 tsp salt', '1 cup butter', '3/4 cup sugar', '3/4 cup brown sugar', '2 eggs', '2 tsp vanilla', '2 cups chocolate chips'],
      steps: ['Preheat oven to 375°F', 'Mix dry ingredients', 'Cream butter and sugars', 'Add eggs and vanilla', 'Blend in flour', 'Fold in chips', 'Drop onto sheets', 'Bake 9-11 mins'],
      tips: ['Underbake for chewier cookies', 'Chill dough 30 mins']
    },
    isPopular: true
  },
  {
    id: 'recipe-2',
    title: 'Homemade Vanilla Cupcakes',
    price: 3000,
    difficulty: 'Beginner',
    prepTime: '20 mins',
    cookTime: '18 mins',
    yield: '12 cupcakes',
    tags: ['beginner', 'cupcakes', 'vanilla'],
    heroImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop',
    previewText: 'Light fluffy vanilla cupcakes.',
    lockedContent: {
      ingredients: ['1 1/2 cups flour', '1 1/2 tsp baking powder', '1/4 tsp salt', '1/2 cup butter', '3/4 cup sugar', '2 eggs', '2 tsp vanilla', '1/2 cup milk'],
      steps: ['Preheat to 350°F', 'Mix dry ingredients', 'Cream butter and sugar', 'Beat in eggs', 'Add flour and milk alternately', 'Fill liners 2/3', 'Bake 18-20 mins'],
      tips: ['Use room temp ingredients', 'Don\'t overmix']
    },
    isPopular: true
  },
  {
    id: 'recipe-3',
    title: 'Artisan Sourdough Bread',
    price: 4500,
    difficulty: 'Advanced',
    prepTime: '20 mins + fermentation',
    cookTime: '45 mins',
    yield: '1 loaf',
    tags: ['advanced', 'bread', 'sourdough'],
    heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
    previewText: 'Professional sourdough technique.',
    lockedContent: {
      ingredients: ['500g bread flour', '350g water', '100g starter', '10g salt'],
      steps: ['Mix flour and water', 'Add starter and salt', 'Stretch and fold 4 hours', 'Cold ferment overnight', 'Bake in Dutch oven'],
      tips: ['Use room temp water', 'Proper scoring']
    },
    isPopular: false
  },
  {
    id: 'recipe-4',
    title: 'Professional Buttercream Frosting',
    price: 2000,
    difficulty: 'Intermediate',
    prepTime: '15 mins',
    cookTime: 'None',
    yield: '12 cupcakes',
    tags: ['intermediate', 'frosting', 'buttercream'],
    heroImage: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop',
    previewText: 'Silky smooth buttercream.',
    lockedContent: {
      ingredients: ['1 cup butter', '4 cups powdered sugar', '2 tsp vanilla', '2-4 tbsp cream', 'Pinch salt'],
      steps: ['Beat butter creamy', 'Add powdered sugar', 'Add vanilla and salt', 'Add cream', 'Beat until fluffy'],
      tips: ['Room temp butter', 'Sift sugar']
    },
    isPopular: false
  },
  {
    id: 'recipe-5',
    title: 'Flaky Croissants',
    price: 5000,
    difficulty: 'Advanced',
    prepTime: '45 mins + chilling',
    cookTime: '20 mins',
    yield: '12 croissants',
    tags: ['advanced', 'pastries', 'croissants'],
    heroImage: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop',
    previewText: 'Perfect laminated croissants.',
    lockedContent: {
      ingredients: ['4 cups flour', '1/4 cup sugar', '2 1/4 tsp yeast', '1 1/2 cups milk', '3 cups butter', '1 tsp salt'],
      steps: ['Make dough', 'Chill 1 hour', 'Laminate 6 times', 'Cut and roll', 'Proof 2 hours', 'Bake at 375°F'],
      tips: ['Keep everything cold', 'Don\'t skip turns']
    },
    isPopular: false
  },
  {
    id: 'recipe-6',
    title: 'Fresh Pasta Dough',
    price: 3500,
    difficulty: 'Intermediate',
    prepTime: '30 mins + resting',
    cookTime: '2-3 mins',
    yield: '4 servings',
    tags: ['intermediate', 'pasta', 'italian'],
    heroImage: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop',
    previewText: 'Authentic Italian pasta.',
    lockedContent: {
      ingredients: ['2 cups 00 flour', '2 eggs', '2 egg yolks', '1 tbsp olive oil', '1/2 tsp salt'],
      steps: ['Make well in flour', 'Add wet ingredients', 'Incorporate flour', 'Knead 8-10 mins', 'Rest 30 mins', 'Roll and cut'],
      tips: ['Room temp eggs', 'Dust with semolina']
    },
    isPopular: false
  },
  {
    id: 'recipe-7',
    title: 'Blueberry Muffins',
    price: 2500,
    difficulty: 'Beginner',
    prepTime: '15 mins',
    cookTime: '20 mins',
    yield: '12 muffins',
    tags: ['beginner', 'muffins', 'blueberries'],
    heroImage: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&h=600&fit=crop',
    previewText: 'Bursting with blueberries.',
    lockedContent: {
      ingredients: ['2 cups flour', '3/4 cup sugar', '1 tbsp baking powder', '1/2 tsp salt', '1/2 cup oil', '1 egg', '1 cup milk', '1 tsp vanilla', '1 1/2 cups blueberries'],
      steps: ['Preheat 400°F', 'Mix dry', 'Mix wet', 'Combine', 'Fold berries', 'Fill cups', 'Bake 18-20 mins'],
      tips: ['Don\'t overmix', 'Toss berries in flour']
    },
    isPopular: false
  },
  {
    id: 'recipe-8',
    title: 'Chocolate Éclairs',
    price: 4000,
    difficulty: 'Advanced',
    prepTime: '45 mins',
    cookTime: '30 mins',
    yield: '12 éclairs',
    tags: ['advanced', 'pastries', 'chocolate'],
    heroImage: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=400&fit=crop',
    previewText: 'French pastries with chocolate.',
    lockedContent: {
      ingredients: ['1 cup water', '1/2 cup butter', '1 cup flour', '4 eggs', '2 cups milk', '1/2 cup sugar', '3 yolks', '2 tbsp cornstarch', '4 oz chocolate', '1/2 cup cream'],
      steps: ['Make choux', 'Pipe and bake', 'Make cream', 'Fill eclairs', 'Glaze with chocolate'],
      tips: ['No oven door', 'Fill before serving']
    },
    isPopular: false
  },
  {
    id: 'recipe-9',
    title: 'Banana Bread',
    price: 2000,
    difficulty: 'Beginner',
    prepTime: '15 mins',
    cookTime: '60 mins',
    yield: '1 loaf',
    tags: ['beginner', 'bread', 'banana'],
    heroImage: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&h=600&fit=crop',
    previewText: 'Moist banana bread.',
    lockedContent: {
      ingredients: ['1 1/2 cups flour', '1 tsp baking soda', '1/2 tsp salt', '1/3 cup butter', '3/4 cup brown sugar', '2 eggs', '1 tsp vanilla', '3 ripe bananas'],
      steps: ['Preheat 350°F', 'Mix dry', 'Mix wet', 'Combine', 'Pour in pan', 'Bake 50-60 mins'],
      tips: ['Use ripe bananas', 'Don\'t overmix']
    },
    isPopular: false
  },
  {
    id: 'recipe-10',
    title: 'Tiramisu',
    price: 3500,
    difficulty: 'Intermediate',
    prepTime: '30 mins + chilling',
    cookTime: 'None',
    yield: '8 servings',
    tags: ['intermediate', 'dessert', 'italian'],
    heroImage: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop',
    previewText: 'Classic Italian dessert.',
    lockedContent: {
      ingredients: ['6 yolks', '3/4 cup sugar', '1 cup mascarpone', '1 1/2 cups cream', '1 tsp vanilla', '2 cups coffee', '24 ladyfingers', '2 tbsp cocoa'],
      steps: ['Beat yolks and sugar', 'Mix mascarpone', 'Whip cream', 'Layer coffee-dipped ladyfingers', 'Spread cream', 'Chill 4+ hours'],
      tips: ['Don\'t soak ladyfingers', 'Chill overnight']
    },
    isPopular: false
  }
];

export const seedTestimonials = [
  { id: 'testimonial-1', name: 'Sarah Johnson', location: 'Lagos', rating: 5, text: 'The red velvet cake was absolutely divine!', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face' },
  { id: 'testimonial-2', name: 'Michael Adebayo', location: 'Abuja', rating: 5, text: 'Their sourdough bread is exceptional!', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { id: 'testimonial-3', name: 'Grace Okafor', location: 'Port Harcourt', rating: 5, text: 'The chocolate chip cookies are heavenly!', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' }
];

export const categories = [
  { id: 'cakes', name: 'Cakes', icon: 'cake' },
  { id: 'donuts', name: 'Donuts', icon: 'donut' },
  { id: 'pastries', name: 'Pastries', icon: 'croissant' },
  { id: 'bread', name: 'Bread', icon: 'bread' },
  { id: 'small-chops', name: 'Small Chops', icon: 'pie' },
  { id: 'drinks', name: 'Drinks', icon: 'coffee' },
  { id: 'shawarma', name: 'Shawarma', icon: 'shawarma' },
  { id: 'cheese-steak', name: 'Cheese Steak', icon: 'cheese-steak' },
  { id: 'nigerian-food', name: 'Nigerian Food', icon: 'food' }
];

export const nigerianFoodCategories = [
  { id: 'swallows', name: 'Swallows' },
  { id: 'soups', name: 'Soups' },
  { id: 'rice-dishes', name: 'Rice Dishes' },
  { id: 'proteins', name: 'Proteins' },
  { id: 'nigerian-food', name: 'Nigerian Dishes' }
];

export const deliveryFee = 1500;
export const freeDeliveryThreshold = 15000;
