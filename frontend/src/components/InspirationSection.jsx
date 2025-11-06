import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Button from "./Button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import your images
import room1 from "../assets/slider/art.png";
import room2 from "../assets/slider/dining.png";
import room3 from "../assets/slider/table.png";

const roomData = [
  { id: 1, img: room1, title: "Inner Peace", subtitle: "01 — Bed Room" },
  { id: 2, img: room2, title: "Light & Airy", subtitle: "02 — Dining" },
  { id: 3, img: room3, title: "Cozy Minimal", subtitle: "03 — Living Room" },
];

export default function InspirationSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-8 bg-[#FCF8F3] my-20 px-6 py-10 md:px-15 lg:px-20">
      <div className="w-full md:w-3/4 md:my-8 lg:w-[40%] flex flex-col justify-center">
        <h1 className="font-bold text-2xl md:text-5xl lg:text-4xl text-[#333]">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-sm md:text-md mt-2 text-[#666] leading-relaxed">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        <div className="mt-6">
          <Button variant="primary">Explore More</Button>
        </div>
      </div>

      <div className="w-full lg:w-2/3 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2.5 },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          navigation
          className="mySwiper"
        >
          {roomData.map((room) => (
            <SwiperSlide key={room.id}>
              <div className="relative rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-white bg-opacity-90 px-4 py-3 rounded-md shadow-md">
                  <p className="text-xs text-[#666]">{room.subtitle}</p>
                  <h2 className="text-lg font-semibold text-[#333]">
                    {room.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* pagination bullets go here */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </section>
  );
}
