import { contactInfo } from "../../data";

export default function ContactSection() {
  return (
    <section className="mt-5 p-8 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col gap-2 justify-center items-center text-center">
        <h1 className="text-2xl font-medium">Get In Touch With Us</h1>
        <p className="text-[#9F9F9F] text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, in.
          Dicta dolores cum nisi facilis nobis blanditiis ipsum sapiente.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col gap-8">
          {contactInfo.map((info) => {
            return (
            <div className="flex gap-4 justify-items-center items-baseline">
                <img src={info.img} alt={info.title} className="w-5 h-5"/>
                <div className="flex flex-col gap-2 justify-center pr-16">
                    <h2 className="text-2xl font-medium text-gray-700">{info.title}</h2>
                    <p className="text-gray-900">{info.detail}</p>
                </div>
            </div>
            );
          })}
        </div>

        <div className="">
            
        </div>
      </div>
    </section>
  );
}
