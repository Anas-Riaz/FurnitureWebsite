import Hero from "../components/Hero.jsx";
import CategorySection from "../components/CategorySection.jsx";
import ProductSection from "../components/ProductSection.jsx";
import InspirationSection from "../components/InspirationSection.jsx";

export default function Home(){
    return(
        <>
            <Hero/>
            <CategorySection/>
            <ProductSection/>
            <InspirationSection/>
        </>
    )
}