import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

import styles from "./DropdownMenu.module.css";

import servicesData from "../../../data/servicesData";

function DropdownMenu({ 
  mobile = false,
  closeDrawer,
 }) {
  const [open, setOpen] = useState(false);

  const handleMobileNavigate = () => {
    setOpen(false);

    if (closeDrawer) {
      closeDrawer();
    }
  };

  // ======================================
  // MOBILE VERSION
  // ======================================

  if (mobile) {
    return (
      <div className={styles.mobileDropdown}>
        <button
          className={styles.mobileButton}
          onClick={() => setOpen(!open)}
        >
          <span>Layanan</span>

          <FiChevronDown
            className={`${styles.icon} ${
              open ? styles.rotate : ""
            }`}
          />
        </button>

        {open && (
          <div className={styles.mobileContent}>
            {servicesData.map((item) => {
              // Panduan Layanan (Google Drive)
              if (item.externalLink) {
                return (
                  <a
                    key={item.id}
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleMobileNavigate}
                  >
                    {item.title}
                  </a>
                );
              }

              // Halaman khusus BPJS SATU
              if (item.slug === "bpjs-satu") {
                return (
                  <Link
                    key={item.id}
                    to="/layanan/bpjs-satu"
                    onClick={handleMobileNavigate}
                  >
                    {item.title}
                  </Link>
                );
              }

              // Seluruh halaman kategori
              return (
                <Link
                  key={item.id}
                  to={`/layanan/${item.slug}`}
                  onClick={handleMobileNavigate}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // ======================================
  // DESKTOP VERSION
  // ======================================

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton}>
        <span>Layanan</span>

        <FiChevronDown className={styles.icon} />
      </button>

      <div className={styles.dropdownContent}>
        {servicesData.map((item) => {
          // Panduan Layanan
          if (item.externalLink) {
            return (
              <a
                key={item.id}
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            );
          }

          // Halaman BPJS SATU
          if (item.slug === "bpjs-satu") {
            return (
              <Link
                key={item.id}
                to="/layanan/bpjs-satu"
              >
                {item.title}
              </Link>
            );
          }

          // Halaman kategori
          return (
            <Link
              key={item.id}
              to={`/layanan/${item.slug}`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DropdownMenu;