import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";

import CareCenterCard from "../../components/contact/CareCenterCard";
import OfficeCard from "../../components/contact/OfficeCard";

import contactOfficeData from "../../data/contactOfficeData";

import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className="container">

          {/* ======================================
              Breadcrumb
          ====================================== */}

          <nav className={styles.breadcrumb}>

            <Link to="/">
              Beranda
            </Link>

            <ChevronRight size={16} />

            <strong>
              Kontak
            </strong>

          </nav>

          {/* ======================================
              Hero
          ====================================== */}

          <header className={styles.hero}>

            <div className={styles.heroContent}>

              <h1 className={styles.title}>
                Hubungi Kami
              </h1>

              <p className={styles.description}>
                Temukan informasi lokasi kantor BPJS Kesehatan
                serta layanan Care Center 165 untuk memperoleh
                bantuan terkait Program Jaminan Kesehatan Nasional
                (JKN).
              </p>

            </div>

          </header>

          {/* ======================================
              Care Center
          ====================================== */}

          <section className={styles.careCenterSection}>

            <CareCenterCard />

          </section>

          {/* ======================================
              Office Section
          ====================================== */}

          <section className={styles.officeSection}>

            <div className={styles.sectionHeader}>

              <h2>
                Lokasi Kantor BPJS Kesehatan
              </h2>

              <p>
                Pilih kantor BPJS Kesehatan yang
                paling dekat dengan lokasi Anda.
              </p>

            </div>

            <div className={styles.officeGrid}>

              {contactOfficeData.map((office) => (

                <OfficeCard
                  key={office.id}
                  {...office}
                />

              ))}

            </div>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;