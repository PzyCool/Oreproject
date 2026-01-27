import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// Layouts
import PublicLayout from './app/layouts/PublicLayout';
import AuthLayout from './app/layouts/AuthLayout';
import DashboardLayout from './app/layouts/DashboardLayout';
import AdminLayout from './app/layouts/AdminLayout';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import PurchasedRecipes from './pages/PurchasedRecipes';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import AdminPopularTreats from './pages/AdminPopularTreats';
import AdminBakery from './pages/AdminBakery';
import AdminPopularRecipes from './pages/AdminPopularRecipes';
import AdminRecipeLibrary from './pages/AdminRecipeLibrary';
import AdminOrders from './pages/AdminOrders';
import NigeriaFood from './pages/NigeriaFood';
import AdminNigeriaFood from './pages/AdminNigeriaFood';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage - With Footer */}
        <Route path="/" element={<PublicLayout showFooter={true} />}>
          <Route index element={<Home />} />
        </Route>

        {/* Other Public Routes - No Footer */}
        <Route path="/" element={<PublicLayout showFooter={false} />}>
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetail />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="nigeria-food" element={<NigeriaFood />} />
        </Route>

        {/* Auth Routes */}
        <Route path="login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="signup" element={<AuthLayout><Signup /></AuthLayout>} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="recipes" element={<PurchasedRecipes />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="popular-treats" element={<AdminPopularTreats />} />
          <Route path="bakery" element={<AdminBakery />} />
          <Route path="nigerian-food" element={<AdminNigeriaFood />} />
          <Route path="popular-recipes" element={<AdminPopularRecipes />} />
          <Route path="recipe-library" element={<AdminRecipeLibrary />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
      </Routes>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1F1F1F',
            color: '#FFF7F2',
          },
        }}
      />
    </BrowserRouter>
  );
}
