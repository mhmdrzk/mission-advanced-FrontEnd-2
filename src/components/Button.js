const Button = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className="w-full bg-[#e7e3fc3b] hover:bg-[#22282a] text-white py-2 rounded-full font-semibold transition"
    >
      {text}
    </button>
  );
};

export default Button;
