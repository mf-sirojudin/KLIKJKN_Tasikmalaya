import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useSearch } from "../../context/SearchContext";

import styles from "./SearchBar.module.css";

function SearchBar({
  variant = "hero",
  placeholder = "Cari informasi layanan...",
  expandable = false,
  expanded = false,
  onToggle = () => {},
}) {
  const navigate = useNavigate();

  const { keyword, setKeyword } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const query = keyword.trim();

    if (!query) return;

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  // ===============================
// MODE NAVBAR
// ===============================

if (variant === "navbar") {
  // mode icon saja
  if (expandable && !expanded) {
    return (
      <button
        type="button"
        className={styles.searchIconButton}
        onClick={onToggle}
        aria-label="Cari"
      >
        <Search size={20} />
      </button>
    );
  }

  return (
    <form
      className={`${styles.searchWrapper} ${styles.navbar}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputWrapper}>
        <button
          type="submit"
          className={styles.iconButton}
          aria-label="Cari"
        >
          <Search
            size={18}
            className={styles.icon}
          />
        </button>

        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={keyword}
          autoFocus
          onChange={(e) =>
            setKeyword(e.target.value)
          }
        />
      </div>

      {expandable && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={onToggle}
        >
          ✕
        </button>
      )}

      {!expandable && (
        <button
          type="submit"
          className={styles.button}
        >
          Cari
        </button>
      )}
    </form>
  );
}

  // ===============================
  // HERO & PAGE
  // ===============================

  return (
    <form
      className={`${styles.searchWrapper} ${styles[variant]}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputWrapper}>
        <button
          type="submit"
          className={styles.iconButton}
          aria-label="Cari"
        >
          <Search
            size={20}
            className={styles.icon}
          />
        </button>

        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
        />
      </div>

    </form>
  );
}

export default SearchBar;