import type React from "react";

const CosCard: React.FC = () => {
  return (
    <a
      href="https://www.youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-xs mx-auto mb-8 overflow-hidden rounded-lg shadow-md bg-gray-100 "
    >
      <div className="w-full h-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1683287925874-f8b46c6437ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Meco"
          className="w-full rounded-t-lg"
        />
        <div className="p-6 text-sm leading-relaxed text-gray-800">
          Youtube is a platform where you can create and watch videos. this card serve purpose as an ads card btw.
        </div>
      </div>
    </a>
  );
};

export default CosCard;
