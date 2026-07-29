import { ArrowRight } from "lucide-react";
import styles from "./CTAButton.module.css";

function CTAButton() {
  const handleClick = () => {
    const layananSection = document.getElementById("layanan");

    if (layananSection) {
      layananSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
    >
      <span>Jelajahi Layanan</span>

      <ArrowRight
        size={20}
        className={styles.icon}
      />
    </button>
  );
}

export default CTAButton;