import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
  Auth
} from 'firebase/auth';
import { app, isUsingDemoConfig } from '../firebase/config';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string, name: string, photoURL: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  googleSignIn: () => Promise<void>;
  updateUserProfile: (name: string, photoURL: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  isDemoMode: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState<Auth | null>(null);

  // Initialize auth only if Firebase app is available
  useEffect(() => {
    if (app && !isUsingDemoConfig) {
      try {
        const authInstance = getAuth(app);
        setAuth(authInstance);
      } catch (error) {
        console.error('Error initializing auth:', error);
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

  const signUp = async (email: string, password: string, name: string, photoURL: string) => {
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

  const login = async (email: string, password: string) => {
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

  const updateUserProfile = async (name: string, photoURL: string) => {
    if (!auth || !auth.currentUser) throw new Error('No user logged in');
    
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    });
    // Refresh user to get updated profile
    setUser(auth.currentUser);
  };

  const resetPassword = async (email: string) => {
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