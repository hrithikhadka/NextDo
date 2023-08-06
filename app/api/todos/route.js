import connectMongo from "@/libs/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name } = await req.json();
  await connectMongo();
  await Todo.create({ name });
  return NextResponse.json({ message: "todo created!" }, { status: 201 });
}

export async function GET() {
  await connectMongo();
  const todos = await Todo.find();
  return NextResponse.json({ todos });
}
