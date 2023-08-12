import Link from "next/link";
import RemoveTodo from "./RemoveTodo";
import { HiPencilAlt } from "react-icons/hi";

const getTodos = async () => {
  try {
    const rsp = await fetch("http://localhost:3000/api/todos", {
      cache: "no-store",
    });
    if (!rsp.ok) {
      throw new Error("Failed!");
    }
    return rsp.json();
  } catch (error) {
    console.log("error!");
  }
};

export default async function ToDos() {
  const { todos } = await getTodos();
  return (
    <>
      {todos.map((t) => (
        <div
          key={t._id}
          className="flex justify-between border border-slate-300 my-3 p-3 gap-5 items-start"
        >
          <div>
            <h2 className="text-2xl font-bold">{t.name}</h2>
          </div>

          <div className="flex gap-2">
            <RemoveTodo />
            <Link href={`/editDos/${t._id}`}>
              <HiPencilAlt size={25} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
