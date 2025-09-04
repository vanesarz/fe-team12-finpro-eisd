"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-xl mx-auto bg-white rounded-full border shadow-md overflow-hidden"
    >
      <input
        type="text"
        placeholder="Search places..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 text-gray-700 ml-1 rounded-full gap-2 focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 text-black hover:outline-1 rounded-full flex items-center gap-2 mr-1"
      >
        <Search size={18} />
      </button>
    </form>
  );
}