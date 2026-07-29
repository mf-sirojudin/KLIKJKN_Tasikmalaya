import { FiSearch } from "react-icons/fi";
import { Squash as Hamburger } from "hamburger-react";
import { Link, useNavigate, } from "react-router-dom";
import { useSearch } from "../../../context/SearchContext";

import DropdownMenu from "./DropdownMenu.jsx";
import styles from "./MobileMenu.module.css";

function MobileMenu({ mobileOpen, setMobileOpen }) {

  const navigate = useNavigate();

  const {
    keyword,
    setKeyword,
  } = useSearch();

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();

    const query = keyword.trim();

    if (!query) return;

    closeDrawer();

    setTimeout(() => {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }, 300);
  };

  return (
    <>
      {/* =========================
          HAMBURGER BUTTON
      ========================== */}

      <div className={styles.mobile}>
        <Hamburger
          toggled={mobileOpen}
          toggle={setMobileOpen}
          size={24}
          rounded
          duration={0.35}
        />
      </div>

      {/* =========================
          OVERLAY
      ========================== */}

      <div
        className={`${styles.overlay} ${
          mobileOpen ? styles.showOverlay : ""
        }`}
        onClick={closeDrawer}
      ></div>

      {/* =========================
          DRAWER
      ========================== */}

      <aside
        className={`${styles.drawer} ${
          mobileOpen ? styles.open : ""
        }`}
      >
        {/* Header */}

        <div className={styles.drawerHeader}>
          <img
            src="/images/logo/klik-jkn-logo.svg"
            alt="KLIK JKN"
            className={styles.drawerLogo}
          />
        </div>

        {/* Navigation */}

        <nav className={styles.navigation}>
          <Link
            to="/"
            onClick={closeDrawer}
          >
            Home
          </Link>

          <DropdownMenu 
            mobile
            closeDrawer={closeDrawer}
           />

          <Link
            to="/kontak"
            onClick={closeDrawer}
          >
            Kontak
          </Link>
        </nav>

        {/* Search */}
        <div className={styles.searchWrapper}>

        <form
          className={styles.searchForm}
          onSubmit={handleSearchClick}
        >

          <div className={styles.searchInputWrapper}>

            <button
              type="submit"
              className={styles.searchIconButton}
              aria-label="Cari"
            >

              <FiSearch size={18} />
            </button>

            <input
              className={styles.searchInput}
              type="text"
              placeholder="Cari informasi layanan..."
              value={keyword}
              onChange={(e) =>
                setKeyword(e.target.value)
              }
            />

          </div>

        </form>
        </div>
      </aside>
    </>
  );
}

export default MobileMenu;