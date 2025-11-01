function CategoryCard({ img1, img2, category }) {
  return (
    <div className="w-full flex flex-col items-center gap-4 group cursor-pointer">
      <div className="relative w-full overflow-hidden rounded-xl">
        {/* Default Image */}
        <img
          src={img1}
          alt={category}
          className="w-full h-auto transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover Image */}
        <img
          src={img2}
          alt={`${category} hover`}
          className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>

      <p className="text-center text-lg md:text-xl font-medium text-[#333333]">
        {category}
      </p>
    </div>
  );
}

export default CategoryCard;
