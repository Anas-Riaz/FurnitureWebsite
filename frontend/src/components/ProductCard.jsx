import share from "../assets/Navbar/share.png";
import like from "../assets/Navbar/like.png";

function ProductCard({ img, name, description, price }) {
  return (
    <div className="w-full flex flex-col items-start justify-center cursor-pointer group">
      <div className="relative w-full overflow-hidden">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4">
          <button className="bg-white text-[#B88E2F] font-semibold px-6 py-2 text-sm hover:bg-[#B88E2F] hover:text-white transition-all duration-200">
            Add to cart
          </button>
          <div className="flex space-x-6">
            <img src={share} alt="share-icon" />
            <img src={like} alt="like-icon" />
          </div>
        </div>
      </div>

      <div className="bg-[#F4F5F7] relative w-full p-4">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-[12px] leading-6">{description}</p>
        <p className="text-[16px] font-medium">RP {price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
