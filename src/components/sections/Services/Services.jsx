import styles from "./Services.module.css";

import ServiceCard from "./ServiceCard";
import servicesData from "../../../data/servicesData";

function Services() {
  return (
    <section
      id="layanan"
      className={styles.servicesSection}
    >
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Layanan
          </h2>

          <p className={styles.subtitle}>
            Pilih layanan yang ingin Anda akses
          </p>
        </div>

        {/* Grid Card */}
        <div className={styles.grid}>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;