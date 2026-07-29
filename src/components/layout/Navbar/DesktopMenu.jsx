import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./DesktopMenu.module.css";

import DropdownMenu from "./DropdownMenu";
import SearchBar from "../../Search/SearchBar";

function DesktopMenu() {
  const [searchOpen, setSearchOpen] = useState(false);

  const location = useLocation();

  return (
    <div className={styles.desktopContainer}>
      <nav className={styles.navigation}>
        <Link
          to="/"
          className={location.pathname === "/" ? styles.active : ""}
        >
          Home
        </Link>

        <DropdownMenu />

        <Link to="/kontak">
          Kontak
        </Link>
      </nav>

      <SearchBar
        variant="navbar"
        expandable
        expanded={searchOpen}
        onToggle={() => setSearchOpen((prev) => !prev)}
      />
    </div>
  );
}

export default DesktopMenu;