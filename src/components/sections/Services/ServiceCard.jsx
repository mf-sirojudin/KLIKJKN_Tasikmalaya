import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import styles from "./ServiceCard.module.css";

function ServiceCard({
  icon: Icon,
  title,
  description,
  slug,
  externalLink,
  color,
}) {

  const cardContent = (
    <>
      {/* Header */}
      <div className={styles.header}>

        <div className={styles.iconWrapper}>
          <div
            className={`${styles.icon} ${styles[color]}`}
          >
            <Icon
              size={30}
              strokeWidth={2}
            />
          </div>
        </div>

        <div className={styles.headerContent}>
          <h3 className={styles.title}>
            {title}
          </h3>
        </div>

      </div>

      <p className={styles.description}>
        {description}
      </p>

      <div className={styles.more}>
        <span>Lihat Selengkapnya</span>
        <ArrowRight size={18}/>
      </div>
    </>
  );

  if (externalLink) {
    return (
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        {cardContent}
      </a>
    );
  }

  const destination =
    slug === "bpjs-satu"
      ? "/layanan/bpjs-satu"
      : `/layanan/${slug}`;

  return (
    <Link
      to={destination}
      className={styles.card}
    >
      {cardContent}
    </Link>
  );
}

export default ServiceCard;