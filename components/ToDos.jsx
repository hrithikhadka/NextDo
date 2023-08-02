import Link from "next/link";
import RemoveTodo from "./RemoveTodo";
import { HiPencilAlt } from "react-icons/hi";
export default function ToDos() {
  return (
    <>
      <div className="flex justify-between border border-slate-300 my-3 p-3 gap-5 items-start">
        <div>
          <h2 className="text-2xl font-bold">Title</h2>
        </div>

        <div className="flex gap-2">
          <RemoveTodo />
          <Link href={"/editDos/123"}>
            <HiPencilAlt size={25} />
          </Link>
        </div>
      </div>
    </>
  );
}
