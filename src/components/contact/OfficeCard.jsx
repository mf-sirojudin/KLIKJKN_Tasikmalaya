import {
  MapPin,
  ArrowRight,
  Building2,
} from "lucide-react";

import styles from "./OfficeCard.module.css";

function OfficeCard({
  officeType,
  name,
  address,
  maps,
  buttonText,
}) {
  return (
    <article className={styles.card}>

      {/* Header */}

      <div className={styles.header}>

        <div className={styles.iconWrapper}>
          <Building2 size={34} />
        </div>

        <div className={styles.headerContent}>

          <span className={styles.badge}>
            {officeType}
          </span>

          <h3 className={styles.title}>
            {name}
          </h3>

        </div>

      </div>

      {/* Address */}

      <div className={styles.addressSection}>

        <MapPin
          size={18}
          className={styles.addressIcon}
        />

        <p className={styles.address}>
          {address}
        </p>

      </div>

      {/* Button */}

      <a
        href={maps}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >

        <div className={styles.buttonContent}>

          <MapPin size={18} />

          <span>
            {buttonText}
          </span>

        </div>

        <ArrowRight
          size={18}
          className={styles.arrow}
        />

      </a>

    </article>
  );
}

export default OfficeCard;