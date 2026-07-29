import styles from "./HeroStats.module.css";

import {
  LayoutGrid,
  Globe,
  BookOpen,
  Headphones,
} from "lucide-react";

const stats = [
  {
    icon: <LayoutGrid size={28} />,
    number: "8",
    title: "Layanan Digital",
    subtitle: "Tersedia",
  },
  {
    icon: <Globe size={28} />,
    number: "8",
    title: "Media Sosial",
    subtitle: "Terintegrasi",
  },
  {
    icon: <BookOpen size={28} />,
    number: "100+",
    title: "Konten Edukasi",
    subtitle: "Video & Brosur",
  },
  {
    icon: <Headphones size={28} />,
    number: "165",
    title: "Care Center",
    subtitle: "24 Jam",
  },
];

function HeroStats() {
  return (
    <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((item, index) => (
            <article
              key={index}
              className={styles.card}
            >
              <div className={styles.iconBox}>
                {item.icon}
              </div>

              <div className={styles.content}>
                <h3>{item.number}</h3>

                <h4>{item.title}</h4>

                <p>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
    </section>
  );
}

export default HeroStats;