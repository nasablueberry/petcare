import { AlertCircle, X } from 'lucide-react';
import { useState } from 'react';
import { isUsingDemoConfig } from '../firebase/config';

export default function FirebaseSetupBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isUsingDemoConfig || !isVisible) {
    return null;
  }

  return (
    <div className="bg-yellow-50 border-b border-yellow-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-yellow-600 flex-shrink-0" size={20} />
            <div className="text-sm">
              <span className="text-yellow-800">
                <strong>Firebase Setup Required:</strong> Please configure your Firebase credentials in <code className="bg-yellow-100 px-1 rounded">firebase.config.json</code> or <code className="bg-yellow-100 px-1 rounded">.env</code> to enable authentication.
              </span>
              <a 
                href="https://console.firebase.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-700 underline ml-2 hover:text-yellow-900"
              >
                Get Firebase Config →
              </a>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-yellow-600 hover:text-yellow-800 flex-shrink-0"
            aria-label="Dismiss"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}