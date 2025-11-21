import gallery from "../../assets/share/gallery.png";


function SocialGallery(){
    return (
        <section className="w-full my-10">
            <p className="text-center text-[#333333] text-[14px]">Share your setup with</p>
            <h2 className="text-center font-bold text-xl md:text-3xl text-[#333333]">
                #FuniroFurniture
            </h2>
            <div className="w-full flex justify-center items-center mt-4">
                <div>
                    <img src={gallery} alt="gallery"/>
                </div>
            </div>
        </section>
    )
}

export default SocialGallery;