# ✅ Firebase Setup Checklist

Follow this checklist to ensure Firebase is properly configured for WarmPaws.

## Step 1: Create Firebase Project

- [ ] Go to https://console.firebase.google.com/
- [ ] Click "Add project" or "Create a project"
- [ ] Enter project name (e.g., "WarmPaws")
- [ ] Accept terms and click "Continue"
- [ ] Disable Google Analytics (optional)
- [ ] Click "Create project"
- [ ] Wait for project to be created
- [ ] Click "Continue" when ready

## Step 2: Add Web App

- [ ] Click the web icon `</>` in project overview
- [ ] Enter app nickname (e.g., "WarmPaws Web")
- [ ] Leave "Firebase Hosting" unchecked for now
- [ ] Click "Register app"
- [ ] **IMPORTANT:** Copy all the config values shown

## Step 3: Update Configuration File

Choose ONE option:

### Option A: firebase.config.json (Recommended for Quick Start)
- [ ] Open `firebase.config.json` in project root
- [ ] Replace `apiKey` with your actual API key
- [ ] Replace `authDomain` with your auth domain
- [ ] Replace `projectId` with your project ID
- [ ] Replace `storageBucket` with your storage bucket
- [ ] Replace `messagingSenderId` with your sender ID
- [ ] Replace `appId` with your app ID
- [ ] Save the file

### Option B: .env file (More Secure)
- [ ] Create `.env` file in project root
- [ ] Copy contents from `.env.example`
- [ ] Replace all `VITE_FIREBASE_*` values with your config
- [ ] Save the file
- [ ] Add `.env` to `.gitignore` (should already be there)

## Step 4: Enable Authentication Methods

- [ ] In Firebase Console, click "Authentication" in left sidebar
- [ ] Click "Get started" if prompted
- [ ] Click "Sign-in method" tab

### Enable Email/Password:
- [ ] Click "Email/Password" provider
- [ ] Toggle "Enable" switch to ON
- [ ] Click "Save"

### Enable Google Sign-In:
- [ ] Click "Google" provider
- [ ] Toggle "Enable" switch to ON
- [ ] Enter project support email
- [ ] Click "Save"

## Step 5: Configure Authorized Domains

- [ ] Stay in "Authentication" section
- [ ] Click "Settings" tab
- [ ] Scroll to "Authorized domains"
- [ ] Verify `localhost` is listed (for development)
- [ ] When deploying, add your production domain here

## Step 6: Verify Setup

- [ ] Stop dev server if running (Ctrl+C)
- [ ] Run `npm run dev`
- [ ] Open http://localhost:5173
- [ ] Check that yellow warning banner is gone
- [ ] Open browser console (F12)
- [ ] Verify no Firebase errors appear

## Step 7: Test Authentication

### Test Registration:
- [ ] Click "Register" in navbar
- [ ] Fill out registration form
- [ ] Use valid email format
- [ ] Password must have uppercase, lowercase, 6+ chars
- [ ] Click "Register"
- [ ] Should see success toast and redirect to home
- [ ] Should see user avatar in navbar

### Test Login:
- [ ] Click "Logout" (if logged in)
- [ ] Click "Login"
- [ ] Enter credentials from registration
- [ ] Click "Login"
- [ ] Should successfully log in

### Test Google Sign-In:
- [ ] Click "Logout" (if logged in)
- [ ] Click "Login"
- [ ] Click "Sign in with Google" button
- [ ] Select Google account
- [ ] Should successfully log in with Google

### Test Protected Routes:
- [ ] Click "Logout"
- [ ] Browse to any service
- [ ] Click "View Details"
- [ ] Should redirect to login page
- [ ] Log back in
- [ ] Click service again
- [ ] Should now see service details page

### Test Password Reset:
- [ ] Click "Logout"
- [ ] Click "Login"
- [ ] Click "Forgot Password?"
- [ ] Enter your email
- [ ] Click "Send Reset Link"
- [ ] Check email for reset link
- [ ] Follow link to reset password

## Common Issues & Solutions

### Issue: "Firebase: Error (auth/invalid-api-key)"
**Solution:** 
- Double-check your API key in config file
- Make sure there are no extra spaces
- Copy directly from Firebase Console

### Issue: "Firebase: Error (auth/project-not-found)"
**Solution:**
- Verify project ID is correct
- Make sure you're using the right Firebase project

### Issue: Yellow warning banner still showing
**Solution:**
- Make sure config file has no "Demo" values
- Restart dev server completely
- Hard refresh browser (Ctrl+Shift+R)

### Issue: Google Sign-In opens popup but fails
**Solution:**
- Check that Google provider is enabled in Firebase
- Verify authorized domains include localhost
- Check browser console for specific error

### Issue: Environment variables not loading
**Solution:**
- Make sure `.env` file is in project root (not in src/)
- File must be named exactly `.env` (not `.env.txt`)
- Restart dev server after creating .env
- Use `firebase.config.json` as alternative

## Security Notes

⚠️ **IMPORTANT:**
- Never commit real Firebase credentials to public repositories
- Always use `.env` file for production
- Keep `.env` in `.gitignore`
- `firebase.config.json` is convenient for local development only
- For production, use environment variables on your hosting platform

## Deployment Checklist

When deploying to production:
- [ ] Add production domain to Firebase authorized domains
- [ ] Set environment variables on hosting platform
- [ ] Test authentication on production URL
- [ ] Verify Google OAuth works on production domain

## Need Help?

If you're stuck:
1. Check browser console for detailed error messages
2. Review [QUICKSTART.md](./QUICKSTART.md)
3. Read [README.md](./README.md)
4. Check Firebase Console for any warnings
5. Verify all authentication providers are enabled

---

**Once all checkboxes are complete, your Firebase setup is done!** ✨
