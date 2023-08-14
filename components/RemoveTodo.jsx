"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveTodo({ id }) {
  const router = useRouter();
  const deleteTodo = async () => {
    const deleteConfirm = confirm("delete this todo?");

    if (deleteConfirm) {
      const rsp = await fetch(`http://localhost:3000/api/todos?id=${id}`, {
        method: "DELETE",
      });
      if (rsp.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={deleteTodo} className="text-red-400">
      <HiOutlineTrash size={25} />
    </button>
  );
}
