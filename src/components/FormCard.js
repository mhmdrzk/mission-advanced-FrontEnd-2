const FormCard = ({ title, subtitle, children }) => {
  return (
    <div className="bg-[#181a1cd6]  p-8 rounded-2xl shadow-xl w-full max-w-md text-white">
      <div className="text-center mb-6">
        <img
          src="img/Logo.png"
          alt="CHILL Logo"
          className="w-29 mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};

export default FormCard;
