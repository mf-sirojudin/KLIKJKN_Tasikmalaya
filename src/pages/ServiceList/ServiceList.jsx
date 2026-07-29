import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Search,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import ResourceCard from "../../components/Resources/ResourceCard";
import BPJSSatuCard from "../../components/BPJSSatu/BPJSSatuCard";
import BPJSSatuDocumentCard from "../../components/BPJSSatu/BPJSSatuDocumentCard";
import { searchCategoryResources } from "../../utils/searchUtils";

import servicesData from "../../data/servicesData";

import styles from "./ServiceList.module.css";

function ServiceList() {
  const { slug } = useParams();

  const [keyword, setKeyword] =
  useState("");

  // Cari kategori berdasarkan slug
  const service = servicesData.find(
    (item) => item.slug === slug
  );

  const getPlaceholder = () => {
    switch (slug) {
      case "bpjs-satu":
        return "Cari nama petugas, nomor telepon, atau rumah sakit...";

      case "video-pandawa":
        return "Cari video layanan PANDAWA...";

      case "brosur-pandawa":
        return "Cari brosur layanan PANDAWA...";

      case "video-mobile-jkn":
        return "Cari video Mobile JKN...";

      case "brosur-mobile-jkn":
        return "Cari brosur Mobile JKN...";

      case "video-informasi-bpjs":
        return "Cari video informasi BPJS...";

      case "brosur-informasi-bpjs":
        return "Cari brosur informasi BPJS...";

      default:
        return "Cari layanan...";
    }
  };

  // Nantinya akan diganti dengan data asli
  const resources = searchCategoryResources(
    slug,
    keyword
  );

  console.log(resources);
    
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <div className="container">

          {/* Breadcrumb */}
          <nav className={styles.breadcrumb}>
            <Link to="/">Beranda</Link>

            <ChevronRight size={16} />

            <Link to="/#layanan">Layanan</Link>

            <ChevronRight size={16} />

            <strong>
              {service?.title || "Kategori"}
            </strong>
          </nav>

          {/* Hero */}
          <header className={styles.hero}>

            <div className={styles.heroContent}>

              <h1 className={styles.title}>
                {service?.title}
              </h1>

              <p className={styles.description}>
                {service?.description}
              </p>

              <p className={styles.resultCount}>
                Menampilkan {resources.length} data
              </p>

            </div>

          </header>

          {/* Search */}
          <div className={styles.searchSection}>

            <form
              className={styles.searchBox}
              onSubmit={(e) => e.preventDefault()}
            >

              <button
                type="submit"
                className={styles.searchButton}
                aria-label="Cari"
              >
                <Search size={18} />
              </button>

              <input
                type="text"
                placeholder={getPlaceholder()}
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />

            </form>

          </div>

          {/* List Resource */}
            <div className={styles.grid}>

              {resources.length > 0 ? (

                resources.map((item) => {

                  // ==========================
                  // CARD DOKUMEN BPJS SATU
                  // ==========================

                  if (item.cardType === "document") {
                    return (
                      <BPJSSatuDocumentCard
                        key={item.id}
                        {...item}
                      />
                    );
                  }

                  // ==========================
                  // CARD PETUGAS BPJS SATU
                  // ==========================

                  if (item.cardType === "petugas") {
                    return (
                      <BPJSSatuCard
                        key={item.id}
                        {...item}
                      />
                    );
                  }

                  // ==========================
                  // CARD RESOURCE BIASA
                  // ==========================

                  return (
                    <ResourceCard
                      key={item.id}
                      {...item}
                    />
                  );

                })

              ) : (

              <div className={styles.emptyState}>

                <div className={styles.emptyIcon}>
                  📂
                </div>

                <h2 className={styles.emptyTitle}>
                  Hasil Pencarian Tidak Ditemukan
                </h2>

                <p className={styles.emptyText}>
                  Konten untuk kategori ini belum tersedia.
                </p>

              </div>
            )}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default ServiceList;