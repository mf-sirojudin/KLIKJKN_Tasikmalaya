import { Link } from "react-router-dom";
import { ArrowLeft, FileQuestion } from "lucide-react";

import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <main className={styles.page}>
      <div className="container">

        <section className={styles.wrapper}>

          <div className={styles.icon}>
            <FileQuestion size={64} strokeWidth={1.8} />
          </div>

          <span className={styles.code}>
            404
          </span>

          <h1 className={styles.title}>
            Halaman Tidak Ditemukan
          </h1>

          <p className={styles.description}>
            Maaf, halaman yang Anda cari tidak tersedia
            atau mungkin telah dipindahkan.
            Silakan kembali ke halaman utama
            untuk mengakses layanan KLIK JKN.
          </p>

          <Link
            to="/"
            className={styles.button}
          >
            <ArrowLeft size={18} />

            <span>
              Kembali ke Beranda
            </span>
          </Link>

        </section>

      </div>
    </main>
  );
}

export default NotFound;