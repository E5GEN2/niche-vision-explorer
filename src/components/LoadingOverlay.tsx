
import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible, message = 'Processing...' }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 flex flex-col items-center space-y-4 shadow-2xl border border-gray-100">
        <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        </div>
        <p className="text-gray-700 font-medium text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;
