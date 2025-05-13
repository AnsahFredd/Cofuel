import React from "react";
import logo from "../assets/images/logo.jpg"; // Replace with your logo path

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center gap-6">
        {/* Glowing rotating ring */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-t-4 border-yellow-400 border-opacity-60 animate-spin shadow-[0_0_40px_#FFD700]"></div>
          <div className="absolute inset-3 rounded-full bg-black flex items-center justify-center">
            <img
              src={logo}
              alt="Loading..."
              className="w-10 h-10 object-contain rounded-full"
            />
          </div>
        </div>

        {/* Loading Text with Pulse */}
        <p
          className="text-yellow-400 text-lg font-semibold animate-pulse tracking-wide"
          style={{ fontFamily: "Catamaran, sans-serif" }}
        >
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
