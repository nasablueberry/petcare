# 🐾 WarmPaws - Pet Care in Winter

A comprehensive winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season.

## 🌐 Live URL

[Add your deployment URL here]

## 📖 Project Purpose

WarmPaws is a full-featured Single Page Application (SPA) that helps pet owners access winter care services, expert advice, and professional grooming options. The platform provides a seamless experience for booking pet care services with secure authentication and responsive design.

## ✨ Key Features

### Core Features
- 🔐 **Complete Authentication System**
  - Email/Password registration and login
  - Google OAuth integration
  - Password reset functionality
  - Protected routes with redirect to login

- 🐕 **Service Management**
  - Browse 8+ winter pet care services
  - Detailed service pages with booking forms
  - Category-based filtering
  - Service ratings and availability tracking

- 👤 **User Profile Management**
  - View user profile with account information
  - Update profile (name and photo URL)
  - Display user statistics and activity
  - Avatar display in navbar with hover effect

- 🎨 **Modern UI/UX**
  - Responsive design (mobile, tablet, desktop)
  - Smooth animations using AOS
  - Interactive hero slider with Swiper
  - Toast notifications for user feedback
  - Password visibility toggle in auth forms

### Additional Features
- ❄️ **Winter Care Tips Section** - Essential advice for pet owners
- 👨‍⚕️ **Expert Vets Showcase** - Meet certified professionals
- ⭐ **Customer Testimonials** - Real feedback from pet owners
- 🎯 **Why Choose Us** - Platform benefits and features
- 🔄 **Related Services** - Smart service recommendations
- 📱 **Fully Responsive** - Works seamlessly on all devices

## 📦 NPM Packages Used

### Core Dependencies
- **react** - UI library
- **react-dom** - React rendering
- **react-router-dom** - Client-side routing
- **firebase** - Authentication and backend services

### UI & Animation
- **swiper** - Touch-enabled slider for hero section
- **aos** - Animate On Scroll library for smooth animations
- **react-hot-toast** - Beautiful toast notifications
- **lucide-react** - Modern icon library

### Development
- **vite** - Fast build tool
- **typescript** - Type safety
- **tailwindcss** - Utility-first CSS framework

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd warmpaws
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase (IMPORTANT)**
   
   You have two options to configure Firebase:

   **Option A: Using firebase.config.json (Easier)**
   
   Edit the `firebase.config.json` file in the root directory with your Firebase credentials:

   a. Go to [Firebase Console](https://console.firebase.google.com/)
   b. Create a new project or select an existing one
   c. Click on the web icon (</>) to add a web app
   d. Copy your configuration values
   e. Open `firebase.config.json` and replace the demo values:

   ```json
   {
     "apiKey": "your_actual_api_key_here",
     "authDomain": "your-project.firebaseapp.com",
     "projectId": "your-project-id",
     "storageBucket": "your-project.appspot.com",
     "messagingSenderId": "your_messaging_sender_id",
     "appId": "your_app_id"
   }
   ```

   **Option B: Using .env file (More Secure)**
   
   Create a `.env` file and add your Firebase credentials:

   ```env
   VITE_FIREBASE_API_KEY=your_actual_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Enable Firebase Authentication**
   - In Firebase Console, go to Authentication > Sign-in method
   - Enable "Email/Password" provider
   - Enable "Google" provider

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 🔥 Firebase Configuration

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password provider
   - Enable Google provider
3. Add your deployment domain to authorized domains
4. Copy your configuration keys to `.env` file

## 📁 Project Structure

```
warmpaws/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with auth state
│   │   ├── Footer.tsx          # Footer with links
│   │   ├── ServiceCard.tsx     # Service display component
│   │   └── ProtectedRoute.tsx  # Route protection wrapper
│   ├── contexts/
│   │   └── AuthContext.tsx     # Authentication context
│   ├── data/
│   │   └── services.json       # Service data (8 services)
│   ├── firebase/
│   │   └── config.ts           # Firebase configuration
│   ├── pages/
│   │   ├── Home.tsx            # Landing page with hero & services
│   │   ├── ServiceDetails.tsx  # Detailed service view
│   │   ├── Login.tsx           # Login page
│   │   ├── Register.tsx        # Registration page
│   │   ├── ForgotPassword.tsx  # Password reset
│   │   ├── MyProfile.tsx       # User profile view
│   │   └── UpdateProfile.tsx   # Profile update form
│   ├── App.tsx                 # Main app component
│   └── main.tsx               # Entry point
├── .env.example               # Environment variables template
└── README.md                  # Project documentation
```

## 🎯 Routes

- `/` - Home page (public)
- `/service/:id` - Service details (protected)
- `/login` - Login page (public)
- `/register` - Registration page (public)
- `/forgot-password` - Password reset (public)
- `/my-profile` - User profile (protected)
- `/update-profile` - Update profile (protected)

## 🔒 Security Features

- ✅ Environment variables for sensitive data
- ✅ Protected routes with authentication check
- ✅ Password validation (uppercase, lowercase, min 6 chars)
- ✅ Secure Firebase authentication
- ✅ XSS protection through React
- ✅ HTTPS enforced in production

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Design Principles

- **Minimalist & Modern** - Clean interface with focus on usability
- **Winter Theme** - Cozy color palette with blue tones
- **Accessibility** - Proper contrast and semantic HTML
- **Performance** - Optimized images and lazy loading
- **Animations** - Subtle AOS animations for engagement

## 🐛 Known Issues & Solutions

### Route Reload
- ✅ Solved: Proper routing configuration for SPA behavior
- All routes work correctly on reload

### Firebase Auth
- ✅ Environment variables properly configured
- ✅ Authorized domains added for deployment

## 📈 Future Enhancements

- Real backend integration for bookings
- Payment gateway integration
- Admin dashboard for service providers
- Pet health tracking features
- Chat support system
- Email notifications

## 👨‍💻 Developer

Developed as part of Assignment-09 (B12 A9)

## 📄 License

This project is licensed for educational purposes.

## 🙏 Acknowledgments

- Firebase for authentication services
- Unsplash for high-quality pet images
- Swiper.js for touch-enabled slider
- AOS for smooth scroll animations
- React Hot Toast for notifications

---

**Note**: This is a demonstration project. Do not use for collecting real PII or sensitive data in production without proper security measures and compliance with data protection regulations.