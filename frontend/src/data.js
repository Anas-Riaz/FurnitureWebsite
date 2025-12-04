//product images
import syltherine from "./assets/products/syltherine.png";
import bedsheet from "./assets/products/bedsheet.png";
import lolito from "./assets/products/lolito.png";
import respira from "./assets/products/respira.png";
import grifo from "./assets/products/grifo.png";
import muggo from "./assets/products/muggo.png";
import pingky from "./assets/products/pingky.png";
import comfySofa from "./assets/products/potty.png";

//product data
const products =  [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish Cafe Chair",
    price: "25,000",
    img: syltherine,
  },
  {
    id: 2,
    name: "Bedsheet",
    description: "Comfortable Bedsheet",
    price: "15,000",
    img: bedsheet,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Trendy Backpack",
    price: "30,000",
    img: lolito,
  },
  {
    id: 4,
    name: "Respira",
    description: "Air Purifier",
    price: "45,000",
    img: respira,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Modern Faucet",
    price: "12,000",
    img: grifo,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Ceramic Mug",
    price: "8,000",
    img: muggo,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "10,000",
    img: pingky,
  },
  {
    id: 8,
    name: "Potty",
    description: "Comfy sofa",
    price: "20,000",
    img: comfySofa,
  },
];

//---------------------------------------------------------------------------------------------------------------------------
// blog images
import blog1 from "./assets/blog/blog1.png"
import blog2 from "./assets/blog/blog2.png"
import blog3 from "./assets/blog/blog3.png"

//blog data
const blogs=[
  {
    img: blog1,
    title: "Going all-in with millennial design",
    category: "Wood",
    date: "20 Jan, 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
  },
  {
    img: blog2,
    title: "5 ways to decorate your home office",
    category: "Interior",
    date: "15 Feb, 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
  },
  {
    img: blog3,
    title: "Top 10 modern furniture trends",
    category: "Handmade",
    date: "10 Mar, 2022",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
  }
]

//---------------------------------------------------------------------------------------------------------------------------
//categories images
import bed from "./assets/bed.png";
import bed2 from "./assets/bed-2.png";
import sofa from "./assets/sofa.png";
import sofa2 from "./assets/sofa-2.png";
import table from "./assets/table.png";
import table2 from "./assets/table-2.png";

//room categories data
const roomCategories = [
  { id:1, img1: bed, img2: bed2, category: "Bedroom" },
  { id:2, img1: sofa, img2: sofa2, category: "Living" },
  { id:3, img1: table, img2: table2, category: "Dining" },
];


//---------------------------------------------------------------------------------------------------------------------------
// categories data
const categories = [
  {id: 1, category: "All"},
  {id: 2, category: "Wood"},
  {id: 3, category: "Craft"},
  {id: 4, category: "Handmade"},
  {id: 5, category: "Interior"},
  {id: 6, category: "Design"},
]
//---------------------------------------------------------------------------------------------------------------------------
//contact images + data
import location from "./assets/Navbar/location.png";
import clock from "./assets/Navbar/clock.png";
import phone from "./assets/Navbar/phone.png";

const contactInfo = [
  {img: location, title: "Address", detail: "236 5th SE Avenue, New York NY10000, United States"},
  {img: phone, title: "Phone", detail: "Mobile: +(84) 546-6789 Hotline: +(84) 456-6789"},
  {img: clock, title: "Hours", detail: "Mon - Fri: 9:00 AM - 6:00 PM"}
]

//---------------------------------------------------------------------------------------------------------------------------
export {products, blogs, roomCategories, categories, contactInfo};