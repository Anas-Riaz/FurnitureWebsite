import Hero from "../components/HomeComponents/Hero.jsx";
import CategorySection from "../components/HomeComponents/CategorySection.jsx";
import ProductSection from "../components/HomeComponents/ProductSection.jsx";
import InspirationSection from "../components/HomeComponents/InspirationSection.jsx";
import SocialGallery from "../components/HomeComponents/SocialGallery.jsx";
import Footer from "../components/Footer.jsx";

export default function Home(){
    return(
        <>
            <Hero/>
            <CategorySection/>
            <ProductSection/>
            <InspirationSection/>
            <SocialGallery/>
            <Footer/>
        </>
    )
}