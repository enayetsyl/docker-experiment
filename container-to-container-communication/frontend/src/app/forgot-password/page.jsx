"use client";
import { api } from "@/lib/api";
import { useState } from "react";

export default function ForgotPw() {
  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    try {
      const res = await api("/forgot-password/", { username });
      setMsg(`Reset code: ${res.code}`);
    } catch (e) {
      setMsg(e.message);
    }
  };

  return (
    <main className="p-6 space-y-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Forgot Password</h1>
      <input
        className="border p-2 w-full"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="w-full bg-sky-600 text-white py-2 rounded"
        onClick={submit}
      >
        Request reset
      </button>
      {msg && <p className="mt-3">{msg}</p>}
    </main>
  );
}
