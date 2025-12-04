import Hero from "../components/HomeComponents/Hero.jsx";
import CategorySection from "../components/HomeComponents/CategorySection.jsx";
import ProductSection from "../components/ProductSection.jsx";
import InspirationSection from "../components/HomeComponents/InspirationSection.jsx";
import SocialGallery from "../components/HomeComponents/SocialGallery.jsx";
import Footer from "../components/Footer.jsx";
import { products } from "../data.js";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <ProductSection data={products} />
      <InspirationSection />
      <SocialGallery />
      <Footer />
    </>
  );
}
