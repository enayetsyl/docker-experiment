"use client";
import { api } from "@/lib/api";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async () => {
    try {
      await api("/register/", form);
      setMsg("🎉 Registered! Now log in.");
    } catch (e) {
      setMsg(e.message);
    }
  };

  return (
    <main className="p-6 space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Register</h1>
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
        Register
      </button>
      {msg && <p className="text-center mt-2">{msg}</p>}
    </main>
  );
}
