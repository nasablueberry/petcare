import { createContext, useContext, useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { app, isUsingDemoConfig } from '../firebase/config.js';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(null);

  // Initialize auth only if Firebase app is available
  useEffect(() => {
    if (app && !isUsingDemoConfig) {
      try {
        const authInstance = getAuth(app);
        setAuth(authInstance);
      } catch (error) {
        // Silent error handling
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  const signUp = async (email, password, name, photoURL) => {
    if (!auth) throw new Error('Firebase not initialized. Please configure Firebase credentials.');
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL
      });
      // Refresh user to get updated profile
      setUser(auth.currentUser);
    }
  };

  const login = async (email, password) => {
    if (!auth) throw new Error('Firebase not initialized. Please configure Firebase credentials.');
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    if (!auth) throw new Error('Firebase not initialized. Please configure Firebase credentials.');
    await signOut(auth);
  };

  const googleSignIn = async () => {
    if (!auth) throw new Error('Firebase not initialized. Please configure Firebase credentials.');
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const updateUserProfile = async (name, photoURL) => {
    if (!auth || !auth.currentUser) throw new Error('No user logged in');
    
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    });
    // Refresh user to get updated profile
    setUser(auth.currentUser);
  };

  const resetPassword = async (email) => {
    if (!auth) throw new Error('Firebase not initialized. Please configure Firebase credentials.');
    await sendPasswordResetEmail(auth, email);
  };

  const value = {
    user,
    loading,
    signUp,
    login,
    logout,
    googleSignIn,
    updateUserProfile,
    resetPassword,
    isDemoMode: isUsingDemoConfig
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
