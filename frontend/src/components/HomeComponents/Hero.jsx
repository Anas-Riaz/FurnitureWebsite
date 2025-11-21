import heroImg from "../../assets/hero.png";
import Button from "../Button.jsx";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Hero"
        className="w-full h-full object-cover object-center"
      />

      {/* Content Container */}
      <div
        className="
          absolute inset-0 
          flex items-center justify-center 
          lg:justify-end 
          px-4 md:px-8 lg:px-24
        "
      >
        <div
          className="
            bg-[#FFF3E3] 
            rounded-xl 
            opacity-90 lg:opacity-85 
            w-11/12 sm:w-5/6 md:w-[60%] lg:w-[55%]
            text-center lg:text-left 
            p-6 md:p-10 lg:p-16 lg:mt-8
            shadow-md
          "
        >
          <p className="text-sm md:text-lg lg:text-xl font-medium text-gray-700">
            New Arrival
          </p>

          <h1 className="text-[#B88E2F] text-2xl md:text-4xl lg:text-5xl font-bold leading-snug mt-3">
            Discover Our
            <br />
            New Collection
          </h1>

          <p className="text-sm md:text-lg mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <Button variant="primary">Buy Now</Button>
        </div>
      </div>
    </section>
  );
}
