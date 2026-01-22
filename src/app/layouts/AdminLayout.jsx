import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store';
import AdminSidebar from '../../components/AdminSidebar';

export default function AdminLayout() {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isAdmin = useAuthStore((state) => state.isAdmin);

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin()) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-cream flex">
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-charcoal mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">Manage products, recipes, and orders</p>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}