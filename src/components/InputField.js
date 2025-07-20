"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const InputField = ({ label, type = "text", value, onChange, placeholder }) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div>
      <label className="block text-sm mb-3 mt-3">{label}</label>
      <div className="relative">
        <input
          type={isPassword && show ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 pr-10 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-2.5 text-gray-400"
            onClick={() => setShow(!show)}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
