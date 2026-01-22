# 🍩 Auntie's Bakery

A production-quality frontend-only web application for a bakery business featuring e-commerce ordering and pay-per-recipe functionality.

## ✨ Features

- **🛒 E-commerce Ordering**: Browse and order cakes, donuts, pastries, bread, and more
- **📖 Pay-Per-Recipe**: Purchase access to exclusive family recipes
- **🔐 Simulated Authentication**: Login/signup with role-based access (customer/admin)
- **📱 Responsive Design**: Mobile-first design with desktop polish
- **🛒 Shopping Cart**: Add items, customize options, checkout flow
- **💳 Simulated Payments**: Realistic payment processing with success/failure simulation
- **📊 Admin Dashboard**: Manage products, recipes, and orders
- **👤 Customer Dashboard**: View orders and purchased recipes
- **🎨 Beautiful UI**: Donut-themed design with smooth animations

## 🚀 Tech Stack

- **React 19** + **Vite** - Modern frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Framer Motion** - Animations
- **React Hot Toast** - Notifications
- **Lucide React** - Icons

## 🎨 Design Theme

- **Primary**: Donut Brown (`#8B5E3C`)
- **Secondary**: Blush Pink (`#F7B7C6`)
- **Background**: Cream (`#FFF7F2`)
- **Text**: Charcoal (`#1F1F1F`)
- **Accent**: Gold (`#F2C46D`)

## 📁 Project Structure

```
src/
├── app/
│   ├── layouts/          # Page layouts (Public, Auth, Dashboard, Admin)
│   └── routes/           # Route configurations
├── components/           # Reusable UI components
├── pages/               # Page components
├── store/               # Zustand state stores
├── mockApi/             # Simulated backend API
├── lib/                 # Utilities and helpers
├── data/                # Seed data and constants
└── styles/              # Additional styles
```

## 🏃‍♂️ Running the Application

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd oreproject
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🎯 MVP Features

### 🛒 Shop (Physical Orders)
- Browse products by category (cakes, donuts, pastries, bread, etc.)
- Product filtering and sorting
- Detailed product pages with customization options
- Shopping cart with quantity management
- Multi-step checkout with delivery details
- Simulated payment processing
- Order confirmation and history

### 📖 Recipes (Pay-Per-Recipe)
- Recipe library with preview cards
- Detailed recipe pages with paywall
- Purchase flow for recipe access
- Unlocked recipes in customer dashboard
- Recipe filtering by difficulty and tags

### 🔐 Authentication & Users
- User registration and login
- Role-based access (customer/admin)
- Protected routes
- Session persistence

### 👨‍💼 Admin Features
- Product CRUD operations
- Recipe management
- Order status updates
- View all orders and analytics

## 🎮 Demo Accounts

### Customer Account
- **Email**: `customer@example.com`
- **Password**: `password`

### Admin Account
- **Email**: `admin@example.com`
- **Password**: `admin123`

## 🔧 Backend Integration

This is a **frontend-only** application using localStorage for data persistence and simulated API calls. To integrate with a real backend:

### API Layer Replacement

The `src/mockApi/` functions simulate backend calls with:
- Configurable delays (300-900ms)
- Random failures (5% chance)
- localStorage persistence

**Replace with real API calls**:
1. Update functions in `src/mockApi/index.js`
2. Change fetch calls to actual HTTP requests
3. Handle real authentication tokens
4. Implement proper error handling

### Data Models

All data structures are ready for backend integration:
- Products, Recipes, Orders, Users
- Cart persistence
- Payment logs
- Purchased recipes tracking

### Authentication

Current auth is simulated. For real backend:
1. Replace localStorage with JWT tokens
2. Implement proper session management
3. Add refresh token logic
4. Handle token expiration

## 🌟 Key Components

### Core Components
- `Navbar` - Navigation with cart and user menu
- `Footer` - Site footer with links
- `ProductCard` - Product display card
- `RecipeCard` - Recipe display with paywall status
- `CategoryPills` - Category filtering
- `QuantityStepper` - Quantity controls

### Layouts
- `PublicLayout` - Public pages with navbar/footer
- `AuthLayout` - Login/signup pages
- `DashboardLayout` - Customer dashboard
- `AdminLayout` - Admin dashboard with sidebar

### Forms & Interactions
- Checkout steps (Cart → Delivery → Payment)
- Product customization options
- Recipe purchase flow
- Admin CRUD forms

## 📱 Responsive Design

- **Mobile-first approach**
- **Breakpoint system**: sm/md/lg/xl
- **Touch-friendly interactions**
- **Optimized for all screen sizes**

## 🎨 Animations & UX

- **Framer Motion** for smooth transitions
- **Loading states** for all async operations
- **Toast notifications** for user feedback
- **Skeleton loading** for better perceived performance
- **Hover effects** and micro-interactions

## 🔍 SEO & Performance

- **Semantic HTML** structure
- **Optimized images** with proper alt texts
- **Fast loading** with Vite bundler
- **Accessible** form controls and navigation
- **Meta tags** and structured data ready

## 🐛 Known Limitations

- **Frontend-only**: No real backend integration
- **localStorage**: Data persists in browser only
- **Simulated payments**: No real money processing
- **No image uploads**: Placeholder images only
- **Basic validation**: Client-side only

## 🚀 Future Enhancements

- **Real backend integration**
- **Payment gateway integration** (Stripe, Paystack)
- **Image upload functionality**
- **Advanced search and filtering**
- **Order tracking system**
- **Email notifications**
- **Mobile app** (React Native)
- **Multi-language support**
- **Advanced analytics**

## 📄 License

This project is built for demonstration purposes. Feel free to use as a reference for your own bakery e-commerce applications.

---

**Made with ❤️ for delicious moments**