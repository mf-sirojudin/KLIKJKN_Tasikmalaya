import {
  PhoneCall,
  Headphones,
  Clock3,
} from "lucide-react";

import careCenterData from "../../data/careCenterData";

import styles from "./CareCenterCard.module.css";

function CareCenterCard() {
  const {
    badge,
    title,
    subtitle,
    description,
    phoneNumber,
    phoneLabel,
    phoneLink,
  } = careCenterData;

  return (
    <section className={styles.banner}>

      {/* ==========================
          LEFT CONTENT
      ========================== */}

      <div className={styles.content}>

        <div className={styles.badge}>
          <Headphones size={18} />
          <span>{badge}</span>
        </div>

        <h2 className={styles.title}>
          {title}
        </h2>

        <p className={styles.subtitle}>
          {subtitle}
        </p>

        <div className={styles.info}>
          <Clock3 size={18} />
          <span>{description}</span>
        </div>

      </div>

      {/* ==========================
          PHONE CARD
      ========================== */}

      <div className={styles.phoneSection}>

        <a
          href={phoneLink}
          className={styles.phoneCard}
          aria-label="Hubungi BPJS Kesehatan Care Center 165"
        >

          <div className={styles.iconWrapper}>
            <PhoneCall size={28} />
          </div>

          <div className={styles.phoneContent}>

            <h3 className={styles.number}>
              {phoneNumber}
            </h3>

            <p className={styles.label}>
              {phoneLabel}
            </p>

          </div>

        </a>

      </div>

    </section>
  );
}

export default CareCenterCard;