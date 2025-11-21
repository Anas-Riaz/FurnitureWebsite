import CategoryCard from "../CategoryCard.jsx";
import bed from "../../assets/bed.png";
import bed2 from "../../assets/bed-2.png";
import sofa from "../../assets/sofa.png";
import sofa2 from "../../assets/sofa-2.png";
import table from "../../assets/table.png";
import table2 from "../../assets/table-2.png";

const categories = [
  { id:1, img1: bed, img2: bed2, category: "Bedroom" },
  { id:2, img1: sofa, img2: sofa2, category: "Living" },
  { id:3, img1: table, img2: table2, category: "Dining" },
];

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
          {categories.map((item) => {
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
