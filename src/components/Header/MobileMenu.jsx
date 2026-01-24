import { useEffect } from "react";
import NavMenu from "./NavMenu";
import UserMenu from "./UserMenu";

const MobileMenu = ({ isOpen, onClose, isAuth, userName }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40">
      {/* MENU */}
      <div
        className="
          absolute top-0 left-0
          w-full h-full
          bg-white
          p-6
          animate-slide-down
          overflow-y-auto
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>

        {/* Nav */}
        <nav className="mt-12 flex flex-col gap-6 items-center text-lg">
          <NavMenu isMobileMenu />
          <UserMenu isAuth={isAuth} userName={userName} />
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;