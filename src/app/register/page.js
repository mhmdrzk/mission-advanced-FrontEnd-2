"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import FormCard from "@/components/FormCard";
import InputField from "@/components/InputField";

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      setError("Semua field wajib diisi.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Konfirmasi kata sandi tidak cocok.");
      return;
    }

    setError("");
    router.push("/beranda");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/img/backgroud-register.jpg')" }}
    >
      <FormCard title="Daftar" subtitle="Selamat datang!">
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Username"
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputField
            label="Kata Sandi"
            placeholder="Masukkan kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <InputField
            label="Konfirmasi Kata Sandi"
            placeholder="Masukkan ulang kata sandi"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />

          {error && <p className="text-red-500 text-sm -mt-2">{error}</p>}

          <div className="flex justify-between text-sm text-gray-300">
            <p className="mt-4 mb-4">
              Sudah punya akun? <a href="/">Masuk</a>
            </p>
          </div>

          <Button text="Daftar" type="submit" />

          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm my-2">
            <hr className="flex-grow border-gray-700" />
            atau
            <hr className="flex-grow border-gray-700" />
          </div>

          <button
            type="submit"
            className="w-full border border-gray-600 hover:bg-gray-800 text-white py-2 rounded-full flex items-center justify-center gap-2"
          >
            <img src="/img/logo-google.png" alt="Google" className="h-5 w-5" />
            Daftar dengan Google
          </button>
        </form>
      </FormCard>
    </div>
  );
}
