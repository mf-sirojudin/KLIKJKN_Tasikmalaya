import styles from "./SocialCard.module.css";

function SocialCard({
  name,
  logo,
  url,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.item}
      aria-label={name}
      title={name}
    >
      {/* Wrapper agar seluruh logo memiliki area yang sama */}
      <div className={styles.logoWrapper}>
        <img
          src={logo}
          alt={name}
          className={styles.logo}
        />
      </div>

      <span className={styles.name}>
        {name}
      </span>
    </a>
  );
}

export default SocialCard;