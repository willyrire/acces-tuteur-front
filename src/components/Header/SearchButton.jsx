import React from "react";
import { Search } from "lucide-react"; // icône propre

const SearchButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full hover:bg-blue-300 transition"
      aria-label="Rechercher un tuteur"
    >
      <Search className="w-5 h-5 text-blue-900" />
    </button>
  );
};

export default SearchButton;