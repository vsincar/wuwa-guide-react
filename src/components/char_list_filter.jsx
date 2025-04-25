import { useState, useEffect } from "react";
import "./char_list_filter.css";
import characters from "./charData.js";

export default function CharListFilter() {
  // State for filtered characters
  const [filteredChars, setFilteredChars] = useState(characters);
  // State for filter options
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [elementFilter, setElementFilter] = useState("filter_all_elements");
  const [weaponFilter, setWeaponFilter] = useState("filter_all_weapons");
  const [rarityFilter, setRarityFilter] = useState("filter_all_rarity");
  const [activeRoles, setActiveRoles] = useState({
    DPS: false,
    "Sub-DPS": false,
    Support: false,
    Healer: false,
  });

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to clear search input
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Function to toggle role filter buttons
  const toggleRole = (role) => {
    setActiveRoles({
      ...activeRoles,
      [role]: !activeRoles[role],
    });
  };

  // Apply all filters
  useEffect(() => {
    let result = characters;

    // Filter by search term
    if (searchTerm) {
      result = result.filter((char) =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by element
    if (elementFilter !== "filter_all_elements") {
      const element =
        elementFilter.charAt(0).toUpperCase() + elementFilter.slice(1);
      result = result.filter((char) => char.elementTypeName === element);
    }

    // Filter by weapon
    if (weaponFilter !== "filter_all_weapons") {
      // Extract weapon name from filter value
      let weapon = weaponFilter.replace("filter_", "");

      // Handle specific cases
      if (weapon === "broadblade") weapon = "Broadblade";
      else if (weapon === "gauntlets") weapon = "Gauntlet";
      else if (weapon === "pistols") weapon = "Pistol";
      else if (weapon === "rectifier") weapon = "Rectifier";
      else if (weapon === "sword") weapon = "Sword";

      result = result.filter((char) => char.weapon === weapon);
    }

    // Filter by rarity
    if (rarityFilter !== "filter_all_rarity") {
      const rarity = rarityFilter === "filter_fivestar_rarity" ? 5 : 4;
      result = result.filter((char) => char.rarity === rarity);
    }

    // Filter by roles
    const activeRolesList = Object.keys(activeRoles).filter(
      (role) => activeRoles[role]
    );
    if (activeRolesList.length > 0) {
      result = result.filter((char) => {
        const charRoles = char.roles.split(", ");
        return activeRolesList.some((role) => charRoles.includes(role));
      });
    }

    // Sort characters
    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "rarity") {
      result.sort((a, b) => b.rarity - a.rarity);
    }

    // Update filtered characters in state
    setFilteredChars(result);

    // Use custom event to pass filtered characters to CharListContainer
    const event = new CustomEvent("charactersFiltered", { detail: result });
    document.dispatchEvent(event);
  }, [
    searchTerm,
    elementFilter,
    weaponFilter,
    rarityFilter,
    activeRoles,
    sortBy,
  ]);

  return (
    <div className="char-list-filter">
      <div className="char-list-filter-title">
        <h3 className="filter-title">Characters</h3>
        <span className="char-list-filter-count">
          Total {filteredChars.length} Characters
        </span>
      </div>
      <div className="char-list-filter-sort">
        <div className="char-list-filter-search">
          <input
            type="text"
            className="char-list-filter-input"
            placeholder="Search for a character"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <button id="clear-btn" onClick={clearSearch}>
              X
            </button>
          )}
        </div>

        <div className="filter-select-inputs">
          <select
            className="char-list-filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="rarity">Rarity</option>
          </select>
          <select
            className="char-list-filter-element"
            value={elementFilter}
            onChange={(e) => setElementFilter(e.target.value)}
          >
            <option value="filter_all_elements">All Elements</option>
            <option value="aero">Aero</option>
            <option value="electro">Electro</option>
            <option value="fusion">Fusion</option>
            <option value="glacio">Glacio</option>
            <option value="havoc">Havoc</option>
            <option value="spectro">Spectro</option>
          </select>
          <select
            className="char-list-filter-element"
            value={weaponFilter}
            onChange={(e) => setWeaponFilter(e.target.value)}
          >
            <option value="filter_all_weapons">All Weapons</option>
            <option value="filter_broadblade">Broadblade</option>
            <option value="filter_gauntlets">Gauntlets</option>
            <option value="filter_pistols">Pistols</option>
            <option value="filter_rectifier">Rectifier</option>
            <option value="filter_sword">Sword</option>
          </select>
          <select
            className="char-list-filter-rarity"
            value={rarityFilter}
            onChange={(e) => setRarityFilter(e.target.value)}
          >
            <option value="filter_all_rarity">All Rarities</option>
            <option value="filter_fivestar_rarity">5 stars</option>
            <option value="filter_fourstar_rarity">4 stars</option>
          </select>
        </div>
        <div className="role-buttons">
          <button
            id="dps-btn"
            onClick={() => toggleRole("DPS")}
            className={activeRoles.DPS ? "active" : "inactive"}
          >
            DPS
          </button>
          <button
            id="subdps-btn"
            onClick={() => toggleRole("Sub-DPS")}
            className={activeRoles["Sub-DPS"] ? "active" : "inactive"}
          >
            Sub-DPS
          </button>
          <button
            id="support-btn"
            onClick={() => toggleRole("Support")}
            className={activeRoles.Support ? "active" : "inactive"}
          >
            Support
          </button>
          <button
            id="healer-btn"
            onClick={() => toggleRole("Healer")}
            className={activeRoles.Healer ? "active" : "inactive"}
          >
            Healer
          </button>
        </div>
      </div>
    </div>
  );
}
