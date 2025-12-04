function BlogCategory({ categories, onCategoryClick, activeCategory }) {
  return (
    <div className="flex flex-col gap-2 mb-2 lg:gap-6">
      <h2 className="text-[#9F9F9F] font-medium lg:text-xl">Blog Categories</h2>
      <ul className="list-none flex flex-wrap gap-6">
        {categories.map((category) => {
          const isActive = activeCategory === category.category;
          return (
            <li
              key={category.id}
              className={`
                py-4 px-6 rounded-2xl cursor-pointer transition-all duration-200
                ${
                  isActive
                    ? "bg-black text-white border border-black"
                    : "bg-white text-black border border-black hover:bg-black hover:text-white"
                }
              `}
              onClick={() => onCategoryClick(category.category)}
            >
              {category.category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogCategory;
