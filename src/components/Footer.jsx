import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold">Accès Tuteur</div>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/about" className="hover:text-white transition">
            À propos
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
          <a href="/faq" className="hover:text-white transition">
            FAQ
          </a>
          <a href="/terms" className="hover:text-white transition">
            Conditions
          </a>
        </div>
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Accès Tuteur
        </div>
      </div>
    </footer>
  );
}

export default Footer;
