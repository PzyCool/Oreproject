import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function DashboardLayout() {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-charcoal mb-2">
              Welcome back, {user?.name || user?.email}!
            </h1>
            <p className="text-gray-600">Manage your orders and purchased recipes</p>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}