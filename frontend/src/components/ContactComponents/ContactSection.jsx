import { contactInfo } from "../../data";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="my-16 w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl flex flex-col gap-8">
        {/* Heading */}
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium">
            Get In Touch With Us
          </h1>
          <p className="text-[#9F9F9F] text-sm sm:text-base max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, in.
            Dicta dolores cum nisi facilis nobis blanditiis ipsum sapiente.
          </p>
        </div>

        {/* Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 mt-8 px-4">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="flex gap-4 items-start">
                <img src={info.img} alt={info.title} className="w-6 h-6 mt-1" />
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg sm:text-xl font-medium text-gray-700">
                    {info.title}
                  </h2>
                  <p className="text-gray-900 text-sm sm:text-base">
                    {info.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
