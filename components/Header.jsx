import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between items-center bg-gray-700 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        NextDo
      </Link>
      <Link className="bg-white p-2" href={"/addDos"}>
        addToDos
      </Link>
    </nav>
  );
}
