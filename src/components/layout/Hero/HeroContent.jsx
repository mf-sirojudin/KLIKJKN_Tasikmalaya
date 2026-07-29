import styles from "./HeroContent.module.css";

import SearchBar from "../../Search/SearchBar";
import CTAButton from "./CTAButton";

function HeroContent() {
  return (
    <div className={styles.content}>
      {/* Logo */}
      <h1 className={styles.logo}>
        <span className={styles.blue}>KLIK</span>{" "}
        <span className={styles.green}>JKN</span>
      </h1>

      {/* Judul */}
      <h2 className={styles.title}>
        Kumpulan Layanan Informasi Kepesertaan
        <br />
        Jaminan Kesehatan Nasional
      </h2>

      {/* Deskripsi */}
      <p className={styles.description}>
        Temukan informasi layanan administrasi peserta,
        video edukasi, brosur, panduan layanan,
        BPJS SATU, serta akses media sosial resmi
        BPJS Kesehatan dalam satu portal.
      </p>

      {/* Search */}
      <SearchBar
        variant="hero"
        placeholder="Cari informasi layanan..."
      />

      {/* CTA */}
      <CTAButton />
    </div>
  );
}

export default HeroContent;