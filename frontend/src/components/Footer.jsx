import { NavLink } from "react-router";

const links = [
  { title: "Home", url: "" },
  { title: "Shop", url: "shop" },
  { title: "Blog", url: "blog" },
  { title: "Contact", url: "contact" },
];
const help = [
  "Order Status",
  "Shipping and Delivery",
  "Returns",
  "Payment Options",
  "Contact Us",
];

function Footer() {
  return (
    <footer className="w-full my-10 px-5 border-t border-t-zinc-200 lg:mt-20 lg:px-20">
      <div className="flex flex-col gap-10 my-15 list-none lg:flex-row lg:gap-20">
        <div className="flex flex-col justify-start gap-2 lg:gap-16">
          <h2 className="text-2xl font-bold">Funiro</h2>
          <p className="text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>

        <div className="flex flex-col justify-start gap-4 lg:gap-8">
          <h3 className="text-[#9F9F9F]">Links</h3>
          {links.map((link) => (
            <li key={link.title}>
              <NavLink to={link.url}>{link.title}</NavLink>
            </li>
          ))}
        </div>

        <div className="flex flex-col justify-start gap-4 lg:gap-8">
          <h3 className="text-[#9F9F9F]">Help</h3>
          {help.map(item=>(<li><NavLink>{item}</NavLink></li>))}
        </div>

        <div className="flex flex-col justify-start gap-4 lg:gap-8">
          <h3 className="text-[#9F9F9F]">New letter</h3>
          <div className="flex justify-start items-center gap-2">
              <input type="text" name="" id="" placeholder="Enter Your Email Address" className="border-b border-black focus:outline-none"/>
              <button className="border-b border-black cursor-pointer">Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <p className="mt-10">2023 furniro. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
