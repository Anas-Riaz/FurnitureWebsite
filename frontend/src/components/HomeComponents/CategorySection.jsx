import CategoryCard from "../CategoryCard.jsx";
import { roomCategories } from "../../data.js";



function CategorySection() {
  return (
    <section className="flex flex-col justify-center items-center my-12 w-full">
      <h2 className="text-center font-bold text-xl md:text-3xl text-[#333333]">
        Browse The Range
      </h2>
      <p className="text-center text-[#333333] text-[14px] mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="w-full flex justify-center items-center my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 md:w-4/5 ">
          {roomCategories.map((item) => {
            return (
                <CategoryCard 
                    key={item.id}
                    img1={item.img1}
                    img2={item.img2} 
                    category={item.category} 
                />
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
