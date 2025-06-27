"use client";
import { api } from "@/lib/api";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");

  const submit = async () => {
    try {
      const res = await api("/login/", form);
      setToken(res.token);
    } catch (e) {
      setToken(e.message);
    }
  };

  return (
    <main className="p-6 space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Login</h1>
      <input
        className="border p-2 w-full"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        className="border p-2 w-full"
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button
        className="w-full bg-sky-600 text-white py-2 rounded"
        onClick={submit}
      >
        Login
      </button>
      {token && <pre className="bg-gray-100 p-3 mt-3">{token}</pre>}
    </main>
  );
}
