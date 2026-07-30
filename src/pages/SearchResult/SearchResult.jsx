import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  ChevronRight,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";

import ResourceCard from "../../components/Resources/ResourceCard";
import BPJSSatuCard from "../../components/BPJSSatu/BPJSSatuCard";

import { searchResources } from "../../utils/searchUtils";

import styles from "./SearchResult.module.css";

function SearchResult() {
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("q") || "";

  const results = searchResources(keyword);

  return (
    <>
      <SEO
          title="Hasil Pencarian | KLIK JKN Tasik"
          description="Temukan informasi layanan BPJS Kesehatan dengan cepat melalui fitur pencarian KLIK JKN Tasik."
      />

      <Navbar />

      <main className={styles.page}>
        <div className="container">

          {/* Breadcrumb */}

          <nav className={styles.breadcrumb}>
            <Link to="/">Beranda</Link>

            <ChevronRight size={16} />

            <strong>Pencarian</strong>
          </nav>

          {/* Hero */}

          <header className={styles.hero}>

            <div className={styles.heroContent}>

              <div className={styles.searchIcon}>
                <Search size={28}/>
              </div>

              <h1 className={styles.title}>
                Hasil Pencarian
              </h1>

              <p className={styles.description}>
                Menampilkan hasil pencarian untuk
                <strong> "{keyword}"</strong>
              </p>

              <span className={styles.total}>
                {results.length} hasil ditemukan
              </span>

            </div>

          </header>

          {/* Result */}

          {results.length > 0 ? (

            <div className={styles.grid}>

              {results.map((item) => {

                if (item.cardType === "bpjs-satu") {

                  return (
                    <BPJSSatuCard
                      key={`bpjs-${item.id}`}
                      {...item}
                    />
                  );

                }

                return (
                  <ResourceCard
                    key={`resource-${item.id}`}
                    {...item}
                  />
                );

              })}

            </div>

          ) : (

            <div className={styles.emptyState}>

              <div className={styles.emptyIcon}>
                🔎
              </div>

              <h2 className={styles.emptyTitle}>
                Tidak Ada Hasil
              </h2>

              <p className={styles.emptyText}>
                Tidak ditemukan informasi yang sesuai
                dengan kata kunci
                <strong> "{keyword}"</strong>.
                <br />
                Silakan coba menggunakan kata kunci lain.
              </p>

            </div>

          )}

        </div>
      </main>
      <Footer />
    </>
  );
}

export default SearchResult;