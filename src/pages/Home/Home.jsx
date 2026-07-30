import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import Hero from "../../components/layout/Hero/Hero";
import SocialMedia from "../../components/sections/SocialMedia/SocialMedia";
import Services from "../../components/sections/Services/Services";
import SEO from "../../components/common/SEO";

function Home() {
  return (
    <>
      <SEO
        title="KLIK JKN Tasik"
        description="Kumpulan layanan informasi kepesertaan JKN BPJS Kesehatan Kantor Cabang Tasikmalaya."
      />

      <Navbar />

      <main>
        <Hero />

        <SocialMedia />

        <Services />
      </main>

      {/* Footer akan ditambahkan setelah Sprint Footer selesai */}
      {/* <Footer /> */}
      <Footer />
    </>
  );
}

export default Home;