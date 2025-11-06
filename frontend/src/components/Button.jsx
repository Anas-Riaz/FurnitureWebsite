function Button({ children, variant = "primary", className = "", ...props }) {
  // Common base styles (shared between both buttons)
  const baseStyles =
    "transition-all duration-200 font-medium rounded-sm";

  // Variant-specific styles
  const variants = {
    primary:
      "bg-[#B88E2F] text-white mt-8 md:mt-10 px-8 md:px-20 py-2 md:py-4 hover:bg-[#a67a1f]",
    secondary:
      "bg-white text-[#B88E2F] font-semibold px-6 py-2 text-sm hover:bg-[#B88E2F] hover:text-white",
  };

  const variantStyles = variants[variant] || variants.primary;

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;