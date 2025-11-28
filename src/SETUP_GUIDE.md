# 🚀 WarmPaws Setup Guide

## Quick Start

Follow these steps to get WarmPaws running on your local machine.

### Step 1: Install Dependencies

Make sure you have these packages installed. Run:

```bash
npm install
```

Required packages that should be in your `package.json`:

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.0",
    "firebase": "^10.8.0",
    "swiper": "^11.0.0",
    "aos": "^2.3.4",
    "react-hot-toast": "^2.4.1",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "@types/aos": "^3.0.7",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.3.3",
    "vite": "^5.1.0",
    "tailwindcss": "^4.0.0",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35"
  }
}
```

### Step 2: Firebase Setup

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project"
   - Follow the setup wizard

2. **Enable Authentication**
   - Navigate to Authentication > Sign-in method
   - Enable "Email/Password" provider
   - Enable "Google" provider
   - Add your OAuth consent screen details

3. **Get Configuration Keys**
   - Go to Project Settings (gear icon)
   - Scroll to "Your apps" section
   - Click web icon (</>)
   - Copy the configuration object

4. **Create .env File**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
   VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
   ```

### Step 3: Run Development Server

```bash
npm run dev
```

The app should open at `http://localhost:5173`

### Step 4: Build for Production

```bash
npm run build
```

### Step 5: Deploy

#### Option A: Netlify

1. Build your project: `npm run build`
2. Create `_redirects` file in `dist` folder:
   ```
   /*    /index.html   200
   ```
3. Drag and drop `dist` folder to Netlify
4. Add your domain to Firebase authorized domains:
   - Firebase Console > Authentication > Settings > Authorized domains
   - Add your Netlify domain (e.g., `your-app.netlify.app`)

#### Option B: Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

#### Option C: Surge

```bash
npm install -g surge
npm run build
cd dist
echo "/* /index.html 200" > 200.html
surge
```

## 📋 Checklist Before Submission

- [ ] All dependencies installed
- [ ] Firebase configuration added to `.env`
- [ ] App runs without errors locally
- [ ] All routes work (no 404 on refresh)
- [ ] Login/Register functionality works
- [ ] Google Sign-In works
- [ ] Protected routes redirect to login
- [ ] Profile update functionality works
- [ ] Password reset works
- [ ] App is responsive on mobile, tablet, desktop
- [ ] AOS animations working
- [ ] Swiper slider working on home page
- [ ] Toast notifications appear
- [ ] At least 10 meaningful commits made
- [ ] README.md completed with live URL
- [ ] Deployed successfully
- [ ] Firebase authorized domains configured

## 🐛 Common Issues & Solutions

### Issue: Firebase errors on deployment
**Solution**: Add your deployment domain to Firebase authorized domains

### Issue: Routes return 404 on refresh
**Solution**: 
- For Netlify: Add `_redirects` file with `/* /index.html 200`
- For Firebase: Ensure `firebase.json` has proper rewrite rules
- For Surge: Create `200.html` with redirect rule

### Issue: Environment variables not working
**Solution**: 
- Make sure `.env` file is in root directory
- Variable names must start with `VITE_`
- Restart dev server after adding variables

### Issue: Google Sign-In not working
**Solution**: 
- Check OAuth consent screen is configured
- Verify authorized domains in Firebase
- Make sure Google provider is enabled

## 📝 Git Commit Examples

Here are examples of meaningful commit messages:

```bash
git commit -m "feat: implement Firebase authentication setup"
git commit -m "feat: create service card component with booking functionality"
git commit -m "feat: add protected routes and auth context"
git commit -m "style: implement responsive navbar with user avatar"
git commit -m "feat: add password validation and toggle visibility"
git commit -m "feat: implement profile update functionality"
git commit -m "feat: add forgot password feature with email prefill"
git commit -m "style: create hero slider with Swiper.js"
git commit -m "feat: add AOS animations throughout the app"
git commit -m "docs: complete README with setup instructions"
git commit -m "fix: resolve route reload issues for SPA behavior"
git commit -m "chore: configure environment variables for production"
```

## 🎯 Testing Checklist

### Authentication Testing
- [ ] Create new account with email/password
- [ ] Login with created account
- [ ] Logout successfully
- [ ] Login with Google
- [ ] Test forgot password flow
- [ ] Verify password validation works
- [ ] Check password visibility toggle

### Navigation Testing
- [ ] All navbar links work
- [ ] Protected routes redirect when not logged in
- [ ] After login, redirect to intended page
- [ ] Footer links are clickable
- [ ] Mobile menu works properly

### Feature Testing
- [ ] Service cards display correctly
- [ ] Service details page shows all information
- [ ] Booking form submits successfully
- [ ] Profile page displays user info
- [ ] Profile update works
- [ ] Toast notifications appear

### Responsive Testing
- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Images load properly
- [ ] Text is readable on all devices

## 📞 Support

If you encounter any issues during setup:
1. Check the console for error messages
2. Verify all environment variables are correct
3. Ensure Firebase is properly configured
4. Check that all dependencies are installed
5. Make sure you're using Node.js v16 or higher

---

Good luck with your assignment! 🎉
