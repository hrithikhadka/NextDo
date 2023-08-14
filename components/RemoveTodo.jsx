"use client";
import { HiOutlineTrash } from "react-icons/hi";
export default function RemoveTodo({ id }) {
  const deleteTodo = async () => {
    const deleteConfirm = confirm("delete this todo?");

    if (deleteConfirm) {
      await fetch(`http://localhost:3000/api/todos?id=${id}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <button onClick={deleteTodo} className="text-red-400">
      <HiOutlineTrash size={25} />
    </button>
  );
}
