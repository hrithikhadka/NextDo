import EditDosForm from "@/components/EditDosForm";

const getTodosById = async (id) => {
  try {
    const rsp = await fetch(`http://localhost:3000/api/todos/${id}`, {
      cache: "no-store",
    });
    if (!rsp.ok) {
      throw new Error("Failed!");
    }
    return rsp.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditDos({ params }) {
  const { id } = params;
  const { todo } = await getTodosById(id);
  const { name } = todo;

  return <EditDosForm id={id} name={name} />;
}
