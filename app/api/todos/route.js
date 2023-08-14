import connectMongo from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name } = await req.json();
  await connectMongo();
  await Todo.create({ name });
  return NextResponse.json({ message: "todo created!" }, { status: 201 });
}

//handle GET request
export async function GET() {
  await connectMongo();
  const todos = await Todo.find();
  return NextResponse.json({ todos });
}

//handle DELETE request
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongo();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
}
