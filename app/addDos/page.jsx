"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddDos() {
  const [name, setName] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      alert("todo name required");
      return;
    }
    try {
      const rsp = await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name }),
      });

      if (rsp.ok) {
        router.push("/");
      } else {
        throw new Error("failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        placeholder="name"
        type="text"
      />

      <button type="submit" className="px-3 py-2 bg-green-400 font-medium">
        Add
      </button>
    </form>
  );
}
