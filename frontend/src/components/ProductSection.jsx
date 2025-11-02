import syltherine from "../assets/products/syltherine.png";
import bedsheet from "../assets/products/bedsheet.png";
import lolito from "../assets/products/lolito.png";
import respira from "../assets/products/respira.png";
import grifo from "../assets/products/grifo.png";
import muggo from "../assets/products/muggo.png";
import pingky from "../assets/products/pingky.png";
import comfySofa from "../assets/products/potty.png";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish Cafe Chair",
    price: "25,000",
    img: syltherine,
  },
  {
    id: 2,
    name: "Bedsheet",
    description: "Comfortable Bedsheet",
    price: "15,000",
    img: bedsheet,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Trendy Backpack",
    price: "30,000",
    img: lolito,
  },
  {
    id: 4,
    name: "Respira",
    description: "Air Purifier",
    price: "45,000",
    img: respira,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Modern Faucet",
    price: "12,000",
    img: grifo,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Ceramic Mug",
    price: "8,000",
    img: muggo,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "10,000",
    img: pingky,
  },
  {
    id: 8,
    name: "Potty",
    description: "Comfy sofa",
    price: "20,000",
    img: comfySofa,
  },
];

function ProductSection() {
  return (
    <section className="w-full ">
      <h2 className="text-center font-bold text-xl md:text-3xl text-[#333333]">
        Products
      </h2>
      <div className="w-full px-5 py-4 flex justify-center items-center mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 md:w-4/5 ">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                img={product.img}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
