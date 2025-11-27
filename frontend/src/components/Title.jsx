import shop from "../assets/shop/shop.png";

function Title({title}) {
  return (
    <section className="w-full mt-14 ">
      
      <div className="w-full relative">
          <img src={shop} alt="shop" className="w-full h-auto" />
          <div className="flex flex-col absolute top-0 bottom-0 left-0 right-0 justify-center items-center">
            <h2 className="text-2xl font-medium lg:text-5xl">{title}</h2>
          </div>
      </div>
    </section>
  );
}

export default Title;
