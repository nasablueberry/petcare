# 🐾 WarmPaws – Pet Care in Winter

A cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season.

## 📋 Project Overview

WarmPaws is a single-page application (SPA) built with React and Tailwind CSS that helps pet owners explore local pet care services, winter pet clothing, grooming options, and expert tips — all in one friendly interface.

## 🌐 Live URL
**Coming soon** (Deploy to Netlify/Firebase)

## 🎯 Key Features

- ✅ **User Authentication**: Email/Password login & signup, Google OAuth, Password validation
- ✅ **Protected Routes**: Service details and profile pages only accessible when logged in
- ✅ **Service Booking**: Browse and book winter pet care services with real-time slot availability
- ✅ **User Profile**: View and update profile (name, email, photo)
- ✅ **Password Recovery**: Secure forgot password with email verification reset
- ✅ **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- ✅ **Smooth Animations**: AOS (Animate On Scroll), Swiper carousel, and Framer Motion effects
- ✅ **Toast Notifications**: Real-time feedback for user actions
- ✅ **SPA Behavior**: No errors on route reloads, persistent navbar/footer

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite 6.3** - Build tool (dev server on port 3000)

### Authentication & Backend
- **Firebase** - Authentication, user management
- **React-Hot-Toast** - Toast notifications

### Animations & UI
- **AOS (Animate On Scroll)** - Scroll animations
- **Swiper.js** - Hero carousel/sliders
- **Framer Motion** - Smooth page transitions

### Form & Data
- **React Hook Form** - Form state management
- **Axios** - HTTP client (optional)

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **DaisyUI** - Component library (built on Tailwind)

## 📦 NPM Packages Used

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "*",
    "firebase": "*",
    "react-hot-toast": "*",
    "aos": "*",
    "swiper": "*",
    "next-themes": "^0.4.6",
    "react-day-picker": "^8.10.1",
    "react-hook-form": "^7.55.0",
    "lucide-react": "^0.487.0",
    "recharts": "^2.15.2",
    "react-resizable-panels": "^2.1.7",
    "embla-carousel-react": "^8.6.0",
    "tailwind-merge": "*",
    "class-variance-authority": "^0.7.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^3.10.2",
    "vite": "6.3.5"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Firebase account

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/warm-paws.git
cd warm-paws

# Install dependencies
npm install

# Create .env.local file with Firebase config
cat > .env.local << EOF
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
EOF

# Start dev server
npm run dev

# Build for production
npm run build
```

The app will start at **http://localhost:3000/**

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── FirebaseSetupBanner.jsx
│   ├── ProtectedRoute.jsx
│   ├── ServiceCard.jsx
│   └── ui/                    # Radix UI components
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── ForgotPassword.jsx
│   ├── MyProfile.jsx
│   ├── UpdateProfile.jsx
│   └── ServiceDetails.jsx
├── contexts/
│   └── AuthContext.jsx        # Authentication logic
├── firebase/
│   └── config.js              # Firebase config with env vars
├── data/
│   └── services.json          # Winter pet care services
├── styles/
│   └── globals.css
├── App.jsx
├── main.jsx
└── index.css
```

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**Never commit `.env.local` to Git!** It's in `.gitignore` by default.

## 📄 JSON Data Format

Services are stored in `src/data/services.json`:

```json
[
  {
    "serviceId": 1,
    "serviceName": "Winter Coat Fitting for Dogs",
    "providerName": "PawCare Studio",
    "providerEmail": "info@pawcare.com",
    "price": 25,
    "rating": 4.9,
    "slotsAvailable": 4,
    "description": "Custom coat fitting and warm outfit options...",
    "image": "https://i.postimg.cc/example.png",
    "category": "Clothing"
  }
]
```

## 🎨 Design Principles

- **Minimalist & Modern**: Clean layout, clear hierarchy
- **Warmth & Coziness**: Winter color palette (blues, whites, warm browns)
- **Accessibility**: ARIA labels, keyboard navigation, sufficient contrast
- **Performance**: Lazy loading, optimized images, code splitting

## 📱 Responsiveness

- **Mobile**: 375px – 640px (iPhone, Android)
- **Tablet**: 641px – 1024px (iPad)
- **Desktop**: 1025px+ (Laptops, monitors)

All components tested and responsive on all breakpoints.

## 🧪 Testing

```bash
# Run dev server with hot reload
npm run dev

# Build and preview production
npm run build
npm run preview

# Test on multiple devices
# Use browser DevTools device emulation or physical devices
```

## ✅ Requirements Checklist

- [x] GitHub commits (10+ meaningful commits)
- [x] README.md with project info, features, packages
- [x] Fully responsive design
- [x] Environment variables for Firebase config
- [x] Minimalist, modern design with animations
- [x] SPA behavior (no reload errors on routes)
- [x] Firebase authentication with Google OAuth
- [x] Protected routes (Service Details, My Profile)
- [x] Service booking form
- [x] User profile with update functionality
- [x] Forgot password feature
- [x] Password toggle eye button
- [x] Toast notifications (success/error)
- [x] At least 3 npm animations packages (AOS, Swiper, React-Hot-Toast)

## 🚢 Deployment

### Netlify

1. Push code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Connect GitHub repo
4. Add environment variables in Netlify dashboard
5. Deploy

Add authorized domain in Firebase Console:
- Go to Firebase Console → Authentication → Settings
- Add your Netlify domain to authorized domains

### Firebase Hosting

```bash
npm run build
firebase deploy
```

## 📞 Support & Contact

For issues or questions, reach out at: **support@warmpaws.com**

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for pet lovers during winter 2025**
