import { seedProducts, seedRecipes, seedTestimonials } from '../data/seedData';

// Utility functions
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getRandomDelay = () => Math.random() * 600 + 300; // 300-900ms

const simulateFailure = () => Math.random() < 0.01; // 1% failure rate (reduced for better UX)

const getFromStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error reading from localStorage key ${key}:`, error);
    return null;
  }
};

const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to localStorage key ${key}:`, error);
  }
};

// Initialize data if not exists
const initializeData = () => {
  // Check if we're in development (localhost or has DEV flag)
  const isDevelopment = window.location.hostname === 'localhost' || 
                        new URLSearchParams(window.location.search).has('dev');
  
  if (isDevelopment) {
    // Always reset products, recipes, testimonials from seedData when ?dev is in URL
    // This ensures changes to seedData.js reflect immediately during development
    saveToStorage('products', seedProducts);
    saveToStorage('recipes', seedRecipes);
    saveToStorage('testimonials', seedTestimonials);
    console.log('Development mode: Data reset to seedData');
  } else {
    // Production: Only initialize if not exists
    if (!getFromStorage('products')) {
      saveToStorage('products', seedProducts);
    }
    if (!getFromStorage('recipes')) {
      saveToStorage('recipes', seedRecipes);
    }
    if (!getFromStorage('testimonials')) {
      saveToStorage('testimonials', seedTestimonials);
    }
  }
  
  // These are always initialized if not exist
  if (!getFromStorage('users')) {
    saveToStorage('users', []);
  }
  if (!getFromStorage('orders')) {
    saveToStorage('orders', []);
  }
  if (!getFromStorage('purchasedRecipes')) {
    saveToStorage('purchasedRecipes', {});
  }
  if (!getFromStorage('payments')) {
    saveToStorage('payments', []);
  }
};


// Utility function to reset data to seedData (use sparingly, e.g., for testing)
export const resetDataToSeed = () => {
  saveToStorage('products', seedProducts);
  saveToStorage('recipes', seedRecipes);
  saveToStorage('testimonials', seedTestimonials);
};

// Initialize on import
initializeData();

// Admin configuration
const ADMIN_EMAILS = ['damiisagirl1827@gmail.com', 'oreoluwaisagirl@gmail.com'];
const ADMIN_PASSWORD = '182716';

// Auth API
export const loginUser = async (email, password) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Network error occurred');
  }

  const users = getFromStorage('users') || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    throw new Error('Invalid email or password');
  }

  // Check if user is trying to access admin with correct credentials
  if (ADMIN_EMAILS.includes(email) && password !== ADMIN_PASSWORD) {
    throw new Error('Invalid credentials for admin access');
  }

  const authUser = { ...user };
  delete authUser.password; // Don't store password in session
  saveToStorage('auth_user', authUser);

  return authUser;
};

export const signupUser = async (userData) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Network error occurred');
  }

  const users = getFromStorage('users') || [];
  const existingUser = users.find(u => u.email === userData.email);

  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Check if signup is for admin email with correct password
  const isAdminEmail = ADMIN_EMAILS.includes(userData.email);
  const isCorrectAdminPassword = userData.password === ADMIN_PASSWORD;

  if (isAdminEmail && !isCorrectAdminPassword) {
    throw new Error('Invalid password for admin account. Please use the correct admin password.');
  }

  // Only allow damiisagirl1827@gmail.com and oreoluwaisagirl@gmail.com to be admins
  const role = isAdminEmail && isCorrectAdminPassword ? 'admin' : 'customer';

  const newUser = {
    id: `user-${Date.now()}`,
    ...userData,
    role: role,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveToStorage('users', users);

  const authUser = { ...newUser };
  delete authUser.password;
  saveToStorage('auth_user', authUser);

  return authUser;
};

export const logoutUser = async () => {
  await delay(200);
  saveToStorage('auth_user', null);
};

export const getCurrentUser = () => {
  return getFromStorage('auth_user');
};

// Products API
export const getProducts = async () => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to fetch products');
  }
  return getFromStorage('products') || [];
};

export const getProductById = async (id) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to fetch product');
  }

  const products = getFromStorage('products') || [];
  const product = products.find(p => p.id === id);

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
};

export const createProduct = async (productData) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to create product');
  }

  const products = getFromStorage('products') || [];
  const newProduct = {
    id: `product-${Date.now()}`,
    ...productData,
    createdAt: new Date().toISOString()
  };

  products.push(newProduct);
  saveToStorage('products', products);

  return newProduct;
};

export const updateProduct = async (id, productData) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to update product');
  }

  const products = getFromStorage('products') || [];
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    throw new Error('Product not found');
  }

  products[index] = { ...products[index], ...productData, updatedAt: new Date().toISOString() };
  saveToStorage('products', products);

  return products[index];
};

export const deleteProduct = async (id) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to delete product');
  }

  const products = getFromStorage('products') || [];
  const filteredProducts = products.filter(p => p.id !== id);
  saveToStorage('products', filteredProducts);
};

// Recipes API
export const getRecipes = async () => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to fetch recipes');
  }
  return getFromStorage('recipes') || [];
};

export const getRecipeById = async (id) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to fetch recipe');
  }

  const recipes = getFromStorage('recipes') || [];
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    throw new Error('Recipe not found');
  }

  return recipe;
};

export const createRecipe = async (recipeData) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to create recipe');
  }

  const recipes = getFromStorage('recipes') || [];
  const newRecipe = {
    id: `recipe-${Date.now()}`,
    ...recipeData,
    createdAt: new Date().toISOString()
  };

  recipes.push(newRecipe);
  saveToStorage('recipes', recipes);

  return newRecipe;
};

export const updateRecipe = async (id, recipeData) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to update recipe');
  }

  const recipes = getFromStorage('recipes') || [];
  const index = recipes.findIndex(r => r.id === id);

  if (index === -1) {
    throw new Error('Recipe not found');
  }

  recipes[index] = { ...recipes[index], ...recipeData, updatedAt: new Date().toISOString() };
  saveToStorage('recipes', recipes);

  return recipes[index];
};

export const deleteRecipe = async (id) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to delete recipe');
  }

  const recipes = getFromStorage('recipes') || [];
  const filteredRecipes = recipes.filter(r => r.id !== id);
  saveToStorage('recipes', filteredRecipes);
};

// Recipe Purchase API
export const purchaseRecipe = async (recipeId, userId) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Payment failed');
  }

  const purchasedRecipes = getFromStorage('purchasedRecipes') || {};
  const userPurchases = purchasedRecipes[userId] || [];

  if (userPurchases.includes(recipeId)) {
    throw new Error('Recipe already purchased');
  }

  userPurchases.push(recipeId);
  purchasedRecipes[userId] = userPurchases;
  saveToStorage('purchasedRecipes', purchasedRecipes);

  // Log payment
  const payments = getFromStorage('payments') || [];
  const recipe = await getRecipeById(recipeId);
  payments.push({
    id: `payment-${Date.now()}`,
    userId,
    recipeId,
    amount: recipe.price,
    type: 'recipe_purchase',
    status: 'completed',
    createdAt: new Date().toISOString()
  });
  saveToStorage('payments', payments);

  return { success: true, recipeId };
};

export const getPurchasedRecipes = async (userId) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to fetch purchased recipes');
  }

  const purchasedRecipes = getFromStorage('purchasedRecipes') || {};
  return purchasedRecipes[userId] || [];
};

export const hasPurchasedRecipe = (userId, recipeId) => {
  const purchasedRecipes = getFromStorage('purchasedRecipes') || {};
  const userPurchases = purchasedRecipes[userId] || [];
  return userPurchases.includes(recipeId);
};

// Cart API
export const getCart = () => {
  return getFromStorage('cart') || [];
};

export const saveCart = (cart) => {
  saveToStorage('cart', cart);
};

export const addToCart = (product, options = {}) => {
  const cart = getCart();
  const cartItem = {
    id: `${product.id}-${Date.now()}`,
    productId: product.id,
    product,
    quantity: 1,
    options,
    addedAt: new Date().toISOString()
  };

  cart.push(cartItem);
  saveCart(cart);
  return cart;
};

export const updateCartItem = (itemId, updates) => {
  const cart = getCart();
  const index = cart.findIndex(item => item.id === itemId);

  if (index !== -1) {
    cart[index] = { ...cart[index], ...updates };
    saveCart(cart);
  }

  return cart;
};

export const removeCartItem = (itemId) => {
  const cart = getCart();
  const filteredCart = cart.filter(item => item.id !== itemId);
  saveCart(filteredCart);
  return filteredCart;
};

export const clearCart = () => {
  saveCart([]);
};

// Orders API
export const createOrder = async (orderData) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to create order');
  }

  const orders = getFromStorage('orders') || [];
  const newOrder = {
    id: `order-${Date.now()}`,
    ...orderData,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  orders.push(newOrder);
  saveToStorage('orders', orders);

  // Auto-update status after delay (simulate processing)
  setTimeout(() => {
    updateOrderStatus(newOrder.id, 'confirmed');
  }, 3000);

  return newOrder;
};

export const getOrders = async (userId) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to fetch orders');
  }

  const orders = getFromStorage('orders') || [];
  return userId ? orders.filter(order => order.userId === userId) : orders;
};

export const getOrderById = async (id) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to fetch order');
  }

  const orders = getFromStorage('orders') || [];
  const order = orders.find(o => o.id === id);

  if (!order) {
    throw new Error('Order not found');
  }

  return order;
};

export const updateOrderStatus = async (orderId, status) => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to update order');
  }

  const orders = getFromStorage('orders') || [];
  const index = orders.findIndex(o => o.id === orderId);

  if (index === -1) {
    throw new Error('Order not found');
  }

  orders[index].status = status;
  orders[index].updatedAt = new Date().toISOString();
  saveToStorage('orders', orders);

  return orders[index];
};

// Payment simulation
export const simulatePayment = async (paymentData) => {
  await delay(2000 + Math.random() * 2000); // 2-4 seconds for payment processing

  if (simulateFailure()) {
    throw new Error('Payment failed - please try again');
  }

  const payments = getFromStorage('payments') || [];
  const payment = {
    id: `payment-${Date.now()}`,
    ...paymentData,
    status: 'completed',
    processedAt: new Date().toISOString()
  };

  payments.push(payment);
  saveToStorage('payments', payments);

  return { success: true, paymentId: payment.id };
};

// Testimonials API
export const getTestimonials = async () => {
  await delay(getRandomDelay());
  if (simulateFailure()) {
    throw new Error('Failed to fetch testimonials');
  }
  return getFromStorage('testimonials') || [];
};