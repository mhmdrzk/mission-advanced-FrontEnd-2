"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import FormCard from "@/components/FormCard";
import api from "@/utils/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username dan password wajib diisi");
      return;
    }

    try {
      const res = await api.get(
        `/users?username=${username}&password=${password}`
      );

      if (res.data.length === 0) {
        setError("Username atau password salah!");
      } else {
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        router.push("/beranda");
      }
    } catch (err) {
      setError("Gagal masuk, coba lagi.");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/background-login.jpg')",
      }}
    >
      <FormCard title="Masuk" subtitle="Selamat datang kembali!">
        <form onSubmit={handleSubmit}>
          <InputField
            label="Username"
            type="text"
            id="username"
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={error}
          />
          <InputField
            label="Kata Sandi"
            type="password"
            id="password"
            placeholder="Masukkan kata sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
          />

          {error && <p className="text-red-500 text-sm -mt-2">{error}</p>}

          <div className="flex justify-between text-sm text-gray-300">
            <p className="mt-6 mb-6">
              Belum punya akun? <a href="/register">Daftar</a>
            </p>
            <p className="mt-6 mb-6">
              <a href="#">Lupa kata sandi?</a>
            </p>
          </div>
          <Button text="Masuk" type="submit" />
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

export default Login;
