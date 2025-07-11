import React from 'react';

export default function PhoneMockup({ screenshotUrl = null, children = null }) {
  return (
    <div className="relative perspective-1000">
      {/* Phone Container */}
      <div className="relative transform rotate-y-12 transition-transform duration-500 hover:rotate-y-6">
        {/* Phone Body */}
        <div className="relative w-64 h-96 bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] shadow-2xl border-8 border-gray-700">
          {/* Screen */}
          <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden">
            {/* Screen Content */}
            <div className="w-full h-full bg-gradient-to-br from-pink-900 via-purple-900 to-pink-800 flex items-center justify-center">
              {screenshotUrl ? (
                <img 
                  src={screenshotUrl} 
                  alt="App Screenshot" 
                  className="w-full h-full object-cover"
                />
              ) : children ? (
                children
              ) : (
                <div className="text-center text-pink-100 p-6">
                  <div className="text-4xl mb-4">📱</div>
                  <div className="text-sm font-mono">PRO App</div>
                </div>
              )}
            </div>
          </div>
          
          {/* Notch */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl"></div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-600 rounded-full"></div>
          
          {/* Volume Buttons */}
          <div className="absolute left-0 top-16 w-1 h-8 bg-gray-700 rounded-r-sm"></div>
          <div className="absolute left-0 top-28 w-1 h-8 bg-gray-700 rounded-r-sm"></div>
          
          {/* Power Button */}
          <div className="absolute right-0 top-20 w-1 h-12 bg-gray-700 rounded-l-sm"></div>
          
          {/* Camera Module */}
          <div className="absolute top-6 right-6 w-8 h-8 bg-gray-800 rounded-full border border-gray-600 flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-black opacity-20 rounded-full blur-sm"></div>
      </div>
    </div>
  );
} 