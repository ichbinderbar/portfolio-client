import { useState } from "react";
import "./SearchBar.scss";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="navbar__search-container">
      <input
        type="text"
        className="navbar__search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}
