import Title from "../components/Title.jsx";
import Footer from "../components/Footer.jsx"
import Banner from "../components/Banner.jsx"
import BlogSection from "../components/blogComponents/BlogSection.jsx";

export default function Blog(){
    return(
        <>
            <Title title="Blog" />
            <BlogSection/>
            <Banner/>
            <Footer/>
        </>
    )
}