"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import FormCard from "@/components/FormCard";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username dan password wajib diisi");
    } else {
      router.push("/beranda");
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
          <div className="flex justify-between text-sm text-gray-300">
            <p className="mt-6 mb-6">
              Belum punya akun? <a href="/register">Daftar</a>
            </p>
            <p className="mt-6 mb-6">
              <a href="#">Lupa kata sandi?</a>
            </p>
          </div>
          <Button text="Masuk" type="submit" />
          <div className="flex justify-center mt-4">
            <button className="flex items-center justify-center w-full py-3 px-4 border border-gray-700 rounded-4xl text-white hover:bg-gray-700 transition">
              <img
                src="/img/logo-google.png"
                alt="Google logo"
                className="mr-2 w-5 h-5"
              />
              Masuk dengan Google
            </button>
          </div>
        </form>
      </FormCard>
    </div>
  );
};

export default Login;
