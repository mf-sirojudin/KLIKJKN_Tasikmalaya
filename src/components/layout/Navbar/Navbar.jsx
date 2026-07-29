import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menutup drawer ketika ukuran layar berubah ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mengunci scroll body ketika drawer dibuka
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`${styles.navbar} ${
        scrolled ? styles.navbarScrolled : ""
      }`}
    >
      <div className={`container ${styles.wrapper}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <img
            src="/images/logo/bpjs-logo.svg"
            alt="BPJS Kesehatan"
            className={styles.bpjsLogo}
          />

          <div className={styles.divider}></div>

          <img
            src="/images/logo/logo-kc-tasik.png"
            alt="KC Tasik"
            className={styles.portalLogo}
          />
        </div>

        {/* Desktop */}
        <DesktopMenu />

        {/* Mobile */}
        <MobileMenu
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      </div>
    </header>
  );
}

export default Navbar;