import connectMongo from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newName: name } = await req.json();
  await connectMongo();
  await Todo.findByIdAndUpdate(id, { name });
  return NextResponse.json({ message: "Todo updated!" }, { status: 200 });
}
