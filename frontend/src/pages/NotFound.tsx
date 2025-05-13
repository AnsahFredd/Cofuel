// src/pages/NotFound.tsx

import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-16 bg-gray-100">
      <div className="text-center max-w-4xl w-full">
        <p className="text-3xl font-semibold text-gray-700">Page not found</p>
        <p className="mt-4 text-lg text-gray-500">
          It seems that the page you are looking for is unavailable. Please try
          again later or explore other services.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
