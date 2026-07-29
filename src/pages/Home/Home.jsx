import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import Hero from "../../components/layout/Hero/Hero";
import SocialMedia from "../../components/sections/SocialMedia/SocialMedia";
import Services from "../../components/sections/Services/Services";

function Home() {
  return (
    <>
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