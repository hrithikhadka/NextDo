"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditDosForm({ id, name }) {
  const [newName, setNewName] = useState(name);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const rsp = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName }),
      });
      if (!rsp.ok) {
        throw new Error("Failed to update");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        placeholder="name"
        type="text"
      />

      <button className="px-3 py-2 bg-green-400 font-medium">Update</button>
    </form>
  );
}
