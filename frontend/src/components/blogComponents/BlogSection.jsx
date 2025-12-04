import BlogPost from "./BlogPost.jsx";
import PageNavigation from '../PageNavigation.jsx';
import {blogs} from "../../data.js";

function BlogSection(){
    return(
        <section className="w-full flex flex-col px-10 py-20 gap-5">
            <p>Categories</p>
            <div className="w-full">
                {blogs.map((blog)=>{
                    return (
                        <BlogPost
                            key={blog.title}
                            img={blog.img}
                            date={blog.date}
                            title={blog.title}
                            content={blog.content}
                            category={blog.category}
                        />
                    )
                })}
            </div>
            <PageNavigation/>
        </section>
    );
}

export default BlogSection;