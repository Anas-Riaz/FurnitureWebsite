import tag from "../../assets/Navbar/tag.png";
import admin from "../../assets/Navbar/admin.png";
import calender from "../../assets/Navbar/calender.png";

export default function BlogPost({ img, date, title, content, category }) {
  return (
    <div className="w-full flex flex-col gap-5 mb-20">
      <div>
        <img src={img} alt={title} className="w-full rounded-lg" />
      </div>
      <div className="flex gap-10">
        <div className="flex gap-2">
          <img src={admin} alt="" className="w-[20px] h-[20px]"/>
          <span>Admin</span>
        </div>
        <div className="flex gap-2">
          <img src={calender} alt="" className="w-[20px] h-[20px]"/>
          <span>{date}</span>
        </div>
        <div className="flex gap-2">
          <img src={tag} alt="" className="w-[20px] h-[20px]" />
          <span>{category}</span>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-2xl mb-5">{title}</h2>
        <p>{content}</p>
        <br />
        <button className="border-b-1 py-4 cursor-pointer">Show More</button>
      </div>
    </div>
  );
}
