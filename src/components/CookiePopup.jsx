import React, { useEffect, useState } from 'react';
import { ShieldCheck, Cookie } from 'lucide-react';

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const isAccepted = localStorage.getItem('cookieAccepted');
      const isDeclined = localStorage.getItem('cookieDeclined');
      if (!isAccepted && !isDeclined) {
        setShowPopup(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    localStorage.removeItem('cookieDeclined');
    setShowPopup(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieDeclined', 'true');
    localStorage.removeItem('cookieAccepted');
    setShowPopup(false);
  };

  if (!showPopup) return null;
// left-1/2 -translate-x-1/2
  return (
    <div className="fixed bottom-2 left-3  z-50 w-[98vw] max-w-sm sm:max-w-md px-1">
      <div className="relative bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl p-4 sm:p-6 flex flex-col gap-3 animate-fade-in">
        {/* Cookie Icon */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-yellow-100 rounded-full p-2 shadow-md border border-yellow-200">
          <Cookie className="text-yellow-500 w-7 h-7" />
        </div>
        {/* Title & Description */}
        <div className="mt-5 text-center">
          <h2 className="text-base sm:text-lg font-bold text-gray-800 flex items-center justify-center gap-2">
            <ShieldCheck className="inline w-4 h-4 text-green-500" />
            We value your privacy
          </h2>
          <p className="text-gray-600 mt-1 text-xs sm:text-sm">
            We use cookies to enhance your experience, analyze site usage, and assist in our marketing efforts.
            <span className="block mt-1 text-[11px] text-gray-400">You can always change or withdraw your consent later.</span>
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-1">
          <button
            onClick={handleDecline}
            className="w-full cursor-pointer sm:w-1/2 px-4 py-2 rounded-lg font-semibold bg-gray-700 hover:bg-gray-800 text-white transition text-sm"
          >
            I decline
          </button>
          <button
            onClick={handleAccept}
            className="w-full cursor-pointer sm:w-1/2 px-4 py-2 rounded-lg font-semibold bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow transition text-sm"
          >
            That's ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;
