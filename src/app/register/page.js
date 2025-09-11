"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import FormCard from "@/components/FormCard";
import InputField from "@/components/InputField";
import api from "@/utils/api";

const RegisterPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("Semua field wajib diisi.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Konfirmasi kata sandi tidak cocok.");
      return;
    }

    try {
      await api.post("/users", {
        username,
        email,
        password,
        avatar: "/img/profile.png",
      });

      alert("Pendaftaran berhasil! Silakan login.");
      router.push("/");
    } catch (err) {
      setError("Gagal mendaftar, coba lagi.");
    }
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
            label="Email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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
        </form>
        <button
          disabled
          className="mt-4 flex items-center justify-center w-full border border-gray-500 rounded-2xl py-2 px-4 opacity-50 cursor-not-allowed"
        >
          <img
            src="/img/logo-google.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Masuk dengan Google
        </button>
      </FormCard>
    </div>
  );
};

export default RegisterPage;
