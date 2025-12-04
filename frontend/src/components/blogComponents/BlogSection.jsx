import BlogPost from "./BlogPost.jsx";
import PageNavigation from "../PageNavigation.jsx";
import { blogs, categories } from "../../data.js";
import BlogCategory from "./BlogCategory.jsx";
import { useState } from "react";

function BlogSection() {
  const [filteredCategory, setFilteredCategory] = useState("All");

  function handleCategoryClick(selectedCategory) {
    setFilteredCategory((prev) =>
      prev === selectedCategory ? "All" : selectedCategory
    );
  }

  return (
    <section className="w-full flex flex-col px-5 py-10 gap-5 lg:gap-10 lg:px-20">
      <BlogCategory
        categories={categories}
        onCategoryClick={handleCategoryClick}
        activeCategory={filteredCategory}
      />
      {blogs
        .filter(
          (blog) =>
            filteredCategory === "All" || blog.category === filteredCategory
        )
        .map((blog) => (
          <BlogPost
            key={blog.title}
            img={blog.img}
            date={blog.date}
            title={blog.title}
            content={blog.content}
            category={blog.category}
          />
        ))}
      ;
      <PageNavigation />
    </section>
  );
}

export default BlogSection;
