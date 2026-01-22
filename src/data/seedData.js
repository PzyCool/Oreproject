export const seedProducts = [
  // Cakes
  {
    id: 'cake-1',
    name: 'Red Velvet Cake',
    category: 'cakes',
    price: 25000,
    description: 'Moist red velvet cake with cream cheese frosting, perfect for celebrations',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop',
    options: {
      sizes: ['6-inch (serves 4-6)', '8-inch (serves 8-10)', '10-inch (serves 12-15)'],
      flavors: ['Classic Red Velvet', 'Chocolate Red Velvet'],
      customMessage: true
    },
    stock: true,
    featured: true,
    popular: true
  },
  {
    id: 'cake-2',
    name: 'Chocolate Fudge Cake',
    category: 'cakes',
    price: 22000,
    description: 'Rich chocolate cake layered with chocolate ganache and topped with chocolate shavings',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=500&h=400&fit=crop',
    options: {
      sizes: ['6-inch (serves 4-6)', '8-inch (serves 8-10)', '10-inch (serves 12-15)'],
      flavors: ['Dark Chocolate', 'Milk Chocolate'],
      customMessage: true
    },
    stock: true,
    featured: false,
    popular: true
  },
  {
    id: 'cake-3',
    name: 'Vanilla Buttercream Cake',
    category: 'cakes',
    price: 20000,
    description: 'Light and fluffy vanilla cake with smooth buttercream frosting',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&h=400&fit=crop',
    options: {
      sizes: ['6-inch (serves 4-6)', '8-inch (serves 8-10)', '10-inch (serves 12-15)'],
      flavors: ['Vanilla', 'Strawberry'],
      customMessage: true
    },
    stock: true,
    featured: false,
    popular: false
  },

  // Donuts
  {
    id: 'donut-1',
    name: 'Glazed Donuts (6-pack)',
    category: 'donuts',
    price: 3500,
    description: 'Classic glazed donuts, freshly fried and coated in sweet glaze',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=400&fit=crop',
    options: {},
    stock: true,
    featured: true,
    popular: true
  },
  {
    id: 'donut-2',
    name: 'Chocolate Sprinkled Donuts (6-pack)',
    category: 'donuts',
    price: 4000,
    description: 'Chocolate donuts topped with colorful sprinkles and chocolate glaze',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=400&fit=crop',
    options: {},
    stock: true,
    featured: false,
    popular: true
  },
  {
    id: 'donut-3',
    name: 'Filled Donuts (6-pack)',
    category: 'donuts',
    price: 4500,
    description: 'Cream-filled donuts with various flavors - custard, raspberry, and chocolate',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=400&fit=crop',
    options: {},
    stock: true,
    featured: false,
    popular: false
  },

  // Pastries
  {
    id: 'pastry-1',
    name: 'Croissants (4-pack)',
    category: 'pastries',
    price: 2800,
    description: 'Buttery, flaky croissants baked fresh daily',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=400&fit=crop',
    options: {},
    stock: true,
    featured: false,
    popular: true
  },
  {
    id: 'pastry-2',
    name: 'Chocolate Danish (4-pack)',
    category: 'pastries',
    price: 3200,
    description: 'Sweet Danish pastry filled with chocolate and topped with icing',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=400&fit=crop',
    options: {},
    stock: true,
    featured: false,
    popular: false
  },

  // Bread
  {
    id: 'bread-1',
    name: 'Sourdough Loaf',
    category: 'bread',
    price: 1500,
    description: 'Artisanal sourdough bread with a crispy crust and soft interior',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&h=400&fit=crop',
    options: {},
    stock: true,
    featured: false,
    popular: false
  },

  // Small Chops
  {
    id: 'smallchop-1',
    name: 'Meat Pies (6-pack)',
    category: 'small-chops',
    price: 6000,
    description: 'Savory meat pies with spiced ground beef, onions, and vegetables',
    image: 'https://images.unsplash.com/photo-1541599468348-e96984315621?w=500&h=400&fit=crop',
    options: {},
    stock: true,
    featured: false,
    popular: true
  },
  {
    id: 'smallchop-2',
    name: 'Samosas (6-pack)',
    category: 'small-chops',
    price: 4500,
    description: 'Crispy fried pastries filled with spiced potatoes and peas',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=400&fit=crop',
    options: {},
    stock: true,
    featured: false,
    popular: false
  },

  // Drinks
  {
    id: 'drink-1',
    name: 'Fresh Orange Juice (1L)',
    category: 'drinks',
    price: 2000,
    description: 'Freshly squeezed orange juice, no preservatives added',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&h=400&fit=crop',
    options: {},
    stock: true,
    featured: false,
    popular: true
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
    previewText: 'Learn to make the perfect chocolate chip cookies with our secret technique for that chewy center and crispy edges. This recipe has been perfected over generations in our family bakery.',
    lockedContent: {
      ingredients: [
        '2 1/4 cups all-purpose flour',
        '1 tsp baking soda',
        '1 tsp salt',
        '1 cup unsalted butter, softened',
        '3/4 cup granulated sugar',
        '3/4 cup brown sugar, packed',
        '2 large eggs',
        '2 tsp vanilla extract',
        '2 cups chocolate chips',
        '1 cup chopped walnuts (optional)'
      ],
      steps: [
        'Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.',
        'In a bowl, whisk together flour, baking soda, and salt. Set aside.',
        'In a large bowl, cream together butter and both sugars until light and fluffy.',
        'Beat in eggs one at a time, then stir in vanilla.',
        'Gradually blend in the flour mixture.',
        'Fold in chocolate chips and nuts if using.',
        'Drop rounded tablespoons of dough onto prepared baking sheets.',
        'Bake for 9-11 minutes or until golden brown.',
        'Cool on baking sheet for 2 minutes before transferring to wire rack.'
      ],
      tips: [
        'For chewier cookies, slightly underbake them.',
        'Chill the dough for 30 minutes before baking for thicker cookies.',
        'Use a mix of milk and dark chocolate chips for better flavor.',
        'Don\'t skip the parchment paper - it prevents sticking and helps with even baking.'
      ]
    }
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
    previewText: 'Master the art of light, fluffy cupcakes with our signature vanilla recipe. Perfect for birthdays, parties, or just because!',
    lockedContent: {
      ingredients: [
        '1 1/2 cups all-purpose flour',
        '1 1/2 tsp baking powder',
        '1/4 tsp salt',
        '1/2 cup unsalted butter, softened',
        '3/4 cup granulated sugar',
        '2 large eggs',
        '2 tsp vanilla extract',
        '1/2 cup milk'
      ],
      steps: [
        'Preheat oven to 350°F (175°C). Line muffin tin with cupcake liners.',
        'Whisk together flour, baking powder, and salt in a bowl.',
        'In another bowl, cream butter and sugar until light and fluffy.',
        'Beat in eggs one at a time, then add vanilla.',
        'Alternately add flour mixture and milk, beginning and ending with flour.',
        'Fill cupcake liners 2/3 full.',
        'Bake for 18-20 minutes until toothpick comes out clean.',
        'Cool completely before frosting.'
      ],
      tips: [
        'Room temperature ingredients are crucial for fluffy cupcakes.',
        'Don\'t overmix the batter - it can make cupcakes tough.',
        'Fill liners only 2/3 full to prevent overflow.',
        'Let cupcakes cool completely before frosting to prevent melting.'
      ]
    }
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
    previewText: 'Learn the ancient art of sourdough bread making. Our professional technique produces bread with perfect crust and open crumb structure.',
    lockedContent: {
      ingredients: [
        '500g bread flour',
        '350g water (75% hydration)',
        '100g active sourdough starter',
        '10g salt',
        'Additional flour for dusting'
      ],
      steps: [
        'Mix flour and water until no dry bits remain. Let rest for 30 minutes.',
        'Add starter and salt. Mix until well combined.',
        'Perform stretch and fold every 30 minutes for 4 hours.',
        'Shape the dough and place in banneton. Cold ferment overnight.',
        'Preheat Dutch oven to 450°F (230°C).',
        'Score the dough and bake covered for 20 minutes.',
        'Remove lid and bake another 20-25 minutes until golden.',
        'Cool completely on wire rack.'
      ],
      tips: [
        'Use filtered water at room temperature.',
        'The dough should be slightly sticky but manageable.',
        'Proper scoring prevents the bread from bursting irregularly.',
        'Let bread cool completely before slicing - this continues the baking process.'
      ]
    }
  },
  {
    id: 'recipe-4',
    title: 'Professional Buttercream Frosting',
    price: 2000,
    difficulty: 'Intermediate',
    prepTime: '15 mins',
    cookTime: 'None',
    yield: 'Enough for 12 cupcakes',
    tags: ['intermediate', 'frosting', 'buttercream'],
    heroImage: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop',
    previewText: 'Our signature buttercream recipe used in all our cakes. Silky smooth, not too sweet, and pipes like a dream.',
    lockedContent: {
      ingredients: [
        '1 cup unsalted butter, softened',
        '4 cups powdered sugar',
        '2 tsp vanilla extract',
        '2-4 tbsp heavy cream',
        'Pinch of salt',
        'Food coloring (optional)'
      ],
      steps: [
        'Beat butter until creamy, about 2 minutes.',
        'Gradually add powdered sugar, 1 cup at a time.',
        'Add vanilla and salt, beat until combined.',
        'Add heavy cream 1 tbsp at a time until desired consistency.',
        'Beat on high for 3-5 minutes until light and fluffy.',
        'Tint with food coloring if desired.'
      ],
      tips: [
        'Use room temperature butter for best results.',
        'Sift powdered sugar to prevent lumps.',
        'Start with less cream and add more as needed.',
        'Beat thoroughly for the lightest texture.'
      ]
    }
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
    previewText: 'Master the art of laminated dough with our detailed croissant recipe. Perfect layers, golden color, and incredible flavor.',
    lockedContent: {
      ingredients: [
        '4 cups bread flour',
        '1/4 cup sugar',
        '2 1/4 tsp active dry yeast',
        '1 1/2 cups cold milk',
        '3 cups unsalted butter (for laminating)',
        '1 tsp salt',
        '1 egg (for egg wash)'
      ],
      steps: [
        'Make dough: Mix flour, sugar, yeast, milk, and salt. Knead until smooth.',
        'Chill dough for 1 hour. Prepare butter block.',
        'Laminate: Encase butter in dough, roll out, fold, repeat 6 times.',
        'Cut triangles and roll into croissants.',
        'Proof for 2 hours until doubled.',
        'Brush with egg wash and bake at 375°F for 15-20 minutes.'
      ],
      tips: [
        'Keep everything cold to maintain butter layers.',
        'Don\'t skip the turns - they create the flaky layers.',
        'Let croissants proof until very puffy.',
        'The bottom should be golden brown when done.'
      ]
    }
  },
  {
    id: 'recipe-6',
    title: 'Fresh Pasta Dough',
    price: 3500,
    difficulty: 'Intermediate',
    prepTime: '30 mins + resting',
    cookTime: '2-3 mins per batch',
    yield: '4 servings',
    tags: ['intermediate', 'pasta', 'italian'],
    heroImage: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop',
    previewText: 'Learn to make authentic Italian pasta from scratch. Our nonna\'s recipe produces silky, tender pasta that beats any store-bought version.',
    lockedContent: {
      ingredients: [
        '2 cups "00" flour (or all-purpose)',
        '2 large eggs',
        '2 egg yolks',
        '1 tbsp olive oil',
        '1/2 tsp salt',
        'Semolina flour for dusting'
      ],
      steps: [
        'Make a well in the flour on a clean surface.',
        'Add eggs, yolks, oil, and salt to the well.',
        'Using a fork, gradually incorporate flour into eggs.',
        'Knead dough for 8-10 minutes until smooth and elastic.',
        'Wrap in plastic and rest for 30 minutes.',
        'Roll out thin and cut into desired shapes.',
        'Cook in boiling salted water for 2-3 minutes.'
      ],
      tips: [
        'Use room temperature eggs for better absorption.',
        'Don\'t add water - the eggs provide all the moisture.',
        'Resting allows gluten to relax for easier rolling.',
        'Dust generously with semolina to prevent sticking.'
      ]
    }
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
    previewText: 'Bursting with fresh blueberries and topped with a sugary crust. These muffins are perfect for breakfast or snacking.',
    lockedContent: {
      ingredients: [
        '2 cups all-purpose flour',
        '3/4 cup sugar',
        '1 tbsp baking powder',
        '1/2 tsp salt',
        '1/2 cup vegetable oil',
        '1 large egg',
        '1 cup milk',
        '1 tsp vanilla extract',
        '1 1/2 cups fresh blueberries',
        '2 tbsp coarse sugar (for topping)'
      ],
      steps: [
        'Preheat oven to 400°F (200°C). Line muffin tin.',
        'Whisk dry ingredients: flour, sugar, baking powder, salt.',
        'Whisk wet ingredients: oil, egg, milk, vanilla.',
        'Combine wet and dry, fold in blueberries.',
        'Fill muffin cups 3/4 full, sprinkle with coarse sugar.',
        'Bake 18-20 minutes until golden and toothpick clean.',
        'Cool in pan for 5 minutes before transferring.'
      ],
      tips: [
        'Don\'t overmix - a few lumps are okay.',
        'Toss blueberries in flour before adding to prevent sinking.',
        'Fill cups generously for nice muffin tops.',
        'The coarse sugar topping adds delightful crunch.'
      ]
    }
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
    previewText: 'Elegant French pastries with crisp choux pastry, rich custard filling, and glossy chocolate glaze. Impress your guests!',
    lockedContent: {
      ingredients: [
        'For choux pastry:',
        '1 cup water',
        '1/2 cup butter',
        '1 cup flour',
        '4 eggs',
        'For pastry cream:',
        '2 cups milk',
        '1/2 cup sugar',
        '3 egg yolks',
        '2 tbsp cornstarch',
        '1 tsp vanilla',
        'For chocolate glaze:',
        '4 oz dark chocolate',
        '1/2 cup heavy cream'
      ],
      steps: [
        'Make choux: Boil water and butter, add flour, cook until dough pulls away.',
        'Cool slightly, beat in eggs one at a time.',
        'Pipe 4-inch strips, bake at 400°F for 15 mins, then 350°F for 15 mins.',
        'Make pastry cream: Heat milk, temper eggs with sugar/cornstarch, cook until thick.',
        'Fill cooled éclairs with pastry cream.',
        'Dip tops in melted chocolate glaze.',
        'Chill until set.'
      ],
      tips: [
        'Don\'t open oven door during first 15 minutes.',
        'Poke holes in sides to release steam after baking.',
        'Fill éclairs just before serving to prevent sogginess.',
        'Chocolate glaze should be glossy and pourable.'
      ]
    }
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
    previewText: 'Moist, flavorful banana bread that uses up those overripe bananas. Perfect for breakfast or afternoon tea.',
    lockedContent: {
      ingredients: [
        '1 1/2 cups all-purpose flour',
        '1 tsp baking soda',
        '1/2 tsp salt',
        '1/3 cup butter, melted',
        '3/4 cup brown sugar',
        '2 eggs, beaten',
        '1 tsp vanilla',
        '3 ripe bananas, mashed',
        '1/2 cup chopped walnuts (optional)'
      ],
      steps: [
        'Preheat oven to 350°F (175°C). Grease 9x5 loaf pan.',
        'Mix dry ingredients: flour, baking soda, salt.',
        'Mix wet ingredients: melted butter and brown sugar.',
        'Add eggs, vanilla, and mashed bananas to wet mixture.',
        'Combine wet and dry ingredients.',
        'Fold in walnuts if using.',
        'Pour into prepared pan and bake 50-60 minutes.',
        'Cool in pan for 10 minutes before transferring.'
      ],
      tips: [
        'Use very ripe bananas with lots of brown spots.',
        'Don\'t overmix - just until combined.',
        'Test with toothpick - it should come out with moist crumbs.',
        'Let cool completely before slicing for clean cuts.'
      ]
    }
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
    previewText: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream. No-bake and absolutely delicious.',
    lockedContent: {
      ingredients: [
        '6 egg yolks',
        '3/4 cup sugar',
        '1 cup mascarpone cheese',
        '1 1/2 cups heavy cream',
        '1 tsp vanilla extract',
        '2 cups strong coffee, cooled',
        '24 ladyfinger cookies',
        '2 tbsp cocoa powder',
        'Dark chocolate shavings'
      ],
      steps: [
        'Beat egg yolks and sugar until pale and thick.',
        'Mix in mascarpone until smooth.',
        'Whip heavy cream and vanilla to soft peaks.',
        'Fold whipped cream into mascarpone mixture.',
        'Dip ladyfingers in coffee and layer in dish.',
        'Spread half the cream mixture over ladyfingers.',
        'Add another layer of dipped ladyfingers.',
        'Top with remaining cream and dust with cocoa.',
        'Chill for at least 4 hours before serving.'
      ],
      tips: [
        'Don\'t soak ladyfingers too long or they\'ll get soggy.',
        'Use room temperature eggs for better emulsification.',
        'The mixture should be smooth and creamy.',
        'Chill overnight for best flavor development.'
      ]
    }
  }
];

export const seedTestimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    location: 'Lagos',
    rating: 5,
    text: 'The red velvet cake was absolutely divine! Ordered it for my anniversary and it was the highlight of the evening. The frosting was perfect and the cake was so moist.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 'testimonial-2',
    name: 'Michael Adebayo',
    location: 'Abuja',
    rating: 5,
    text: 'I\'ve tried many bakeries in Abuja, but Auntie\'s Bakery stands out. Their sourdough bread is exceptional - crusty outside, soft inside. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 'testimonial-3',
    name: 'Grace Okafor',
    location: 'Port Harcourt',
    rating: 5,
    text: 'The chocolate chip cookies are heavenly! I bought their recipe and now I make them at home. The secret technique really works - perfect texture every time.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
];

export const categories = [
  { id: 'cakes', name: 'Cakes', icon: 'cake' },
  { id: 'donuts', name: 'Donuts', icon: 'donut' },
  { id: 'pastries', name: 'Pastries', icon: 'croissant' },
  { id: 'bread', name: 'Bread', icon: 'bread' },
  { id: 'small-chops', name: 'Small Chops', icon: 'pie' },
  { id: 'drinks', name: 'Drinks', icon: 'coffee' }
];

export const deliveryFee = 1500;
export const freeDeliveryThreshold = 15000;