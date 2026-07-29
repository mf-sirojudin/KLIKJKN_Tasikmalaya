import { ExternalLink } from "lucide-react";

import styles from "./ResourceCard.module.css";

function ResourceCard({
  icon: Icon,
  title,
  description,
  url,
  color = "blue",
  actionText = "Lihat Selengkapnya",
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      {/* Header */}
      <div className={styles.header}>

        <div className={styles.iconWrapper}>
          <div
            className={`${styles.icon} ${styles[color]}`}
          >
            <Icon
              size={28}
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

      {/* Description */}
      {description && (
        <p className={styles.description}>
          {description}
        </p>
      )}

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.link}>
          {actionText}
        </span>

        <ExternalLink
          size={18}
          className={styles.arrow}
        />
      </div>
    </a>
  );
}

export default ResourceCard;