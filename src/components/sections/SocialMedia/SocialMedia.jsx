import styles from "./SocialMedia.module.css";

import SocialCard from "./SocialCard";
import socialData from "./socialData";

function SocialMedia() {
  return (
    <section
      className={styles.socialSection}
      id="media-sosial"
    >
      <div className="container">

        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Media Sosial
          </h2>
        </div>

        {/* Social Media List */}
        <div className={styles.grid}>
          {socialData.map((item) => (
            <SocialCard
              key={item.id}
              name={item.name}
              logo={item.logo}
              url={item.url}
              color={item.color}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default SocialMedia;