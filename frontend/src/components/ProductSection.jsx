import ProductCard from "./ProductCard.jsx";

function ProductSection({title= "Products", data}) {
  return (
    <section className="w-full my-10">
      <h2 className="text-center font-bold text-xl md:text-3xl text-[#333333]">
        {title}
      </h2>
      <div className="w-full px-5 py-4 flex justify-center items-center mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 md:w-4/5 ">
          {data.map((product) => {
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
