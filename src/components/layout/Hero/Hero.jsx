import styles from "./Hero.module.css";

import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.wrapper}`}>
            <HeroContent />
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <HeroStats />
        </div>
      </section>
    </>
  );
}

export default Hero;