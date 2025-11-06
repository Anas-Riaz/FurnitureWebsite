function ProductCard({ img, name, description, price }) {
  return (
    <div className="w-full flex flex-col items-start justify-center cursor-pointer">
      <div className="relative w-full overflow-hidden">
        <img src={img} alt="" className="w-full h-full object-cover object-center"/>
      </div>
      <div className="bg-[#F4F5F7] relative w-full p-4">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-[12px] leading-6">{description}</p>
          <p className="text-[16px] font-medium">RP {price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
