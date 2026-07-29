import {
  UserRound,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import styles from "./BPJSSatuCard.module.css";

function BPJSSatuCard({
  name,
  phone,
  whatsapp,
}) {
  return (
    <article className={styles.card}>

      {/* Informasi Petugas */}
      <div className={styles.profile}>

        <div className={styles.avatar}>
          <UserRound
            size={26}
            strokeWidth={2}
          />
        </div>

        <div className={styles.info}>

          <h3 className={styles.name}>
            {name}
          </h3>

          <div className={styles.phone}>
            <Phone size={16} />

            <span>{phone}</span>
          </div>

        </div>

      </div>

      {/* Tombol WhatsApp */}
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        <div className={styles.buttonContent}>
          <MessageCircle size={18} />

          <span>Hubungi via WhatsApp</span>
        </div>

        <ArrowRight
          size={18}
          className={styles.arrow}
        />
      </a>

    </article>
  );
}

export default BPJSSatuCard;