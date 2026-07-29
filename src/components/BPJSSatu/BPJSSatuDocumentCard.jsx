import {
  FileText,
  ExternalLink,
} from "lucide-react";

import styles from "./BPJSSatuDocumentCard.module.css";

function BPJSSatuDocumentCard({
  title,
  description,
  buttonText,
  link,
}) {
  return (
    <article className={styles.card}>

      {/* Icon */}

      <div className={styles.header}>

        <div className={styles.icon}>
            <FileText size={34} />
        </div>

        <h3 className={styles.title}>
            {title}
        </h3>

        </div>

      {/* Button */}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        >

        <div className={styles.buttonContent}>
            <FileText size={18} />

            <span>
            {buttonText}
            </span>
        </div>

        <ExternalLink
            size={18}
            className={styles.arrow}
        />

        </a>

    </article>
  );
}

export default BPJSSatuDocumentCard;