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
          src="https://codrops-1f606.kxcdn.com/codrops/wp-content/uploads/2024/06/meco.jpg?x21305"
          alt="Meco"
          className="w-full rounded-t-lg"
        />
        <div className="p-6 text-sm leading-relaxed text-gray-800">
          Meco is a distraction-free space for reading and discovering newsletters, separate from the inbox. Try it,
          unclutter your inbox.
        </div>
      </div>
    </a>
  );
};

export default CosCard;
