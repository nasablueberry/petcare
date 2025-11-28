import { initializeApp } from 'firebase/app';

// Default Firebase configuration
const defaultFirebaseConfig = {
  apiKey: "AIzaSyDAeI20OLkf6zAaAoOy6ffYa_NAZHIsQfQ",
  authDomain: "toytopia-543e9.firebaseapp.com",
  projectId: "toytopia-543e9",
  storageBucket: "toytopia-543e9.firebasestorage.app",
  messagingSenderId: "827819404295",
  appId: "1:827819404295:web:129c4b31063395ddad0ea2",
  measurementId: "G-JWJNKZJ0H6"
};

// Safely access environment variables with multiple fallback approaches
const getEnvVar = (key) => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
      return import.meta.env[key];
    }
  } catch (e) {
    // Ignore error
  }
  
  try {
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
                                  firebaseConfig.projectId === 'warmpaws-demo' ||
                                  firebaseConfig.projectId === '';

let app = null;
let initializationError = null;

// Initialize Firebase with real credentials
try {
  app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
  initializationError = error;
}

export { app, initializationError };
