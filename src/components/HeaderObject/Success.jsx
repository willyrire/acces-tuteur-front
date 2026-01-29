import React from "react";
import { X, CircleAlert } from "lucide-react";

const Success = ({
  isMobile,
  message,
  hasButton,
  buttonText,
  buttonTextMobile,
  buttonTargetFunction,
  onClose,
}) => {
  return (
    <div className="left-0 w-full z-40 bg-green-400 border-b-2 border-green-500">
      <div
        className={`${hasButton ? "max-w-6xl " : "max-w-3xl"} mx-auto px-4 py-3 flex items-center ${
          isMobile ? "text-justify" : "justify-between"
        }`}
      >
        <div className="flex items-center">
          <CircleAlert className="w-10 h-10 text-black" />
        </div>

        <p
          className={`text-black font-medium ${isMobile ? "mr-2 ml-5" : "ml-5"}`}
          dangerouslySetInnerHTML={{ __html: message }}
        />

        <div className="flex items-center align-baseline">
          {hasButton && (
            <button
              onClick={buttonTargetFunction}
              className="hover:cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition-colors duration-200"
            >
              {isMobile ? buttonTextMobile : buttonText}
            </button>
          )}
          <button
            onClick={onClose}
            className="hover:cursor-pointer ml-3 bg-green-400 rounded-full hover:bg-green-300 px-4 py-4 transition"
          >
            <X className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
