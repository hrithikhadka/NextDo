export default function AddDos() {
  return (
    <form className="flex flex-col gap-4">
      <input
        className="border border-slate-500 px-8 py-2"
        placeholder="name"
        type="text"
      />

      <button className="px-3 py-2 bg-green-400 font-medium">Add</button>
    </form>
  );
}
