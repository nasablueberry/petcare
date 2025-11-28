# 🚀 Quick Start Guide

## Get WarmPaws Running in 5 Minutes

### Step 1: Install Dependencies (1 min)

```bash
npm install
```

### Step 2: Configure Firebase (3 min)

**Important:** The app won't work until you add your Firebase credentials!

You have two options to configure Firebase:
- **Option A (Easier):** Edit `firebase.config.json` file
- **Option B:** Use `.env` file (more secure for production)

#### Option A: Using firebase.config.json (Recommended for Quick Start)

1. **Go to Firebase Console**: https://console.firebase.google.com/

2. **Create or Select Project**
   - Click "Add project" (or select existing)
   - Name it "WarmPaws" or anything you like
   - Follow the wizard

3. **Add Web App**
   - Click the web icon `</>` 
   - Register app (name: "WarmPaws Web")
   - Copy the config values

4. **Enable Authentication**
   - Go to "Authentication" in sidebar
   - Click "Get started"
   - Click "Sign-in method" tab
   - Enable "Email/Password" ✓
   - Enable "Google" ✓

5. **Update firebase.config.json File**
   - Open `firebase.config.json` in your project root
   - Replace the placeholder values with your Firebase config:

```json
{
  "apiKey": "AIzaSyC_your_actual_key_here",
  "authDomain": "your-project.firebaseapp.com",
  "projectId": "your-project-id",
  "storageBucket": "your-project.appspot.com",
  "messagingSenderId": "123456789012",
  "appId": "1:123456789012:web:abc123def456"
}
```

#### Option B: Using .env File (For Production)

1. Create a `.env` file in the root directory
2. Copy the contents from `.env.example`
3. Replace placeholder values with your Firebase config

### Step 3: Run the App (1 min)

```bash
npm run dev
```

Open http://localhost:5173

## ✅ You're Done!

You should now see:
- ✓ Home page with hero slider
- ✓ 8 pet care services
- ✓ Working login/register
- ✓ No error banner (if Firebase is configured)

## 🐛 Still Seeing Errors?

### "Firebase configuration error"
- Check that `.env` file exists in root directory
- Verify all values are filled in (no "Demo" values)
- Restart dev server: Stop (Ctrl+C) and run `npm run dev` again

### "Firebase: Error (auth/invalid-api-key)"
- Your API key is incorrect
- Copy it exactly from Firebase Console
- Make sure there are no extra spaces

### Google Sign-In not working
- Enable Google provider in Firebase Console
- Go to: Authentication > Sign-in method > Google > Enable

## 📝 Test the Features

Try these to verify everything works:

1. **Create Account**
   - Click "Register"
   - Fill in name, email, photo URL, password
   - Password must have: uppercase, lowercase, 6+ chars

2. **Login**
   - Use the account you created
   - Or use Google Sign-In

3. **Browse Services**
   - Click "View Details" on any service
   - Should redirect to login if not logged in

4. **Book a Service**
   - Login first
   - Click service > Fill form > Book Now
   - Should see success toast

5. **Update Profile**
   - Go to "My Profile"
   - Click "Update Profile"
   - Change name or photo URL

## 🚀 Ready to Deploy?

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for deployment instructions to:
- Netlify
- Firebase Hosting
- Surge

## 💡 Pro Tips

- Use a real photo URL for best results (e.g., from Unsplash)
- Test on mobile by opening on your phone
- Check console for any warnings
- All routes should work on refresh

## 📞 Need Help?

Check these files:
- [README.md](./README.md) - Full documentation
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Detailed setup
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Commit examples

---

**Happy Coding!** 🐾