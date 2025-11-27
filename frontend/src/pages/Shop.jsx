import Title from "../components/Title";
import FilterBar from "../components/ShopComponents/FilterBar";
import ProductSection from "../components/ProductSection";
import products from "../data.js"
import PageNavigation from "../components/PageNavigation.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";

const shopProducts = [...products, ...products]

export default function Shop() {
  return (
    <>
      <Title />
      <FilterBar/>
      <ProductSection data={shopProducts} />
      <PageNavigation/>
      <Banner/>
      <Footer/>
    </>
  );
}
