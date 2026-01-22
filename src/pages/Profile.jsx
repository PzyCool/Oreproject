import React, { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';
import Button from '../components/Button';
import { useAuthStore } from '../store';
import toast from 'react-hot-toast';

export default function Profile() {
  const user = useAuthStore((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });

  const handleSave = () => {
    // In a real app, this would update the user profile
    toast.success('Profile updated successfully!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-charcoal">Profile Settings</h1>
        {!isEditing && (
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-bakery p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-donut-brown rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-charcoal">{user?.name}</h2>
            <p className="text-gray-600">{user?.role === 'admin' ? 'Administrator' : 'Customer'}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              />
            ) : (
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <User className="h-5 w-5 text-gray-400" />
                <span>{user?.name}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            {isEditing ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              />
            ) : (
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>{user?.email}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-donut-brown focus:border-transparent"
              />
            ) : (
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>{user?.phone}</span>
              </div>
            )}
          </div>

          {isEditing && (
            <div className="flex space-x-3">
              <Button onClick={handleSave}>Save Changes</Button>
              <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
            </div>
          )}
        </div>
      </div>

      {/* Account Info */}
      <div className="bg-white rounded-lg shadow-bakery p-6">
        <h2 className="text-xl font-bold text-charcoal mb-4">Account Information</h2>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Account Type</span>
            <span className="font-medium capitalize">{user?.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Member Since</span>
            <span className="font-medium">January 2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Last Login</span>
            <span className="font-medium">Today</span>
          </div>
        </div>
      </div>
    </div>
  );
}