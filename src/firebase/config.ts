import { initializeApp, FirebaseApp } from 'firebase/app';
import { defaultFirebaseConfig } from './config.default';

// Safely access environment variables with multiple fallback approaches
const getEnvVar = (key: string): string => {
  try {
    // Try import.meta.env first
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
      return import.meta.env[key];
    }
  } catch (e) {
    // Ignore error
  }
  
  try {
    // Try process.env as fallback
    if (typeof process !== 'undefined' && process.env && process.env[key]) {
      return process.env[key];
    }
  } catch (e) {
    // Ignore error
  }
  
  return '';
};

// Build Firebase config with environment variables or default values
const firebaseConfig = {
  apiKey: getEnvVar('VITE_FIREBASE_API_KEY') || defaultFirebaseConfig.apiKey,
  authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN') || defaultFirebaseConfig.authDomain,
  projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID') || defaultFirebaseConfig.projectId,
  storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET') || defaultFirebaseConfig.storageBucket,
  messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID') || defaultFirebaseConfig.messagingSenderId,
  appId: getEnvVar('VITE_FIREBASE_APP_ID') || defaultFirebaseConfig.appId
};

// Check if using demo config
export const isUsingDemoConfig = firebaseConfig.apiKey.includes('Demo') || 
                                  firebaseConfig.apiKey === '' || 
                                  !firebaseConfig.projectId ||
                                  firebaseConfig.projectId === 'warmpaws-demo';

let app: FirebaseApp | null = null;
let initializationError: Error | null = null;

// Only initialize Firebase if not using demo config
if (!isUsingDemoConfig) {
  try {
    app = initializeApp(firebaseConfig);
  } catch (error) {
    console.error('Firebase initialization error:', error);
    initializationError = error as Error;
  }
} else {
  console.warn('⚠️ Using demo Firebase configuration!');
  console.warn('Please update your .env file with actual Firebase credentials.');
  console.warn('See QUICKSTART.md for setup instructions.');
}

export { app, initializationError };