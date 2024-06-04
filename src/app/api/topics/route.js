import connectDB from "@/libs/db";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectDB();
    const newTopic = await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic created successfully", topic: newTopic }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating topic", details: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching topics", details: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    if (!id) {
      return NextResponse.json({ error: "Topic ID is required" }, { status: 400 });
    }

    await connectDB();
    const deletedTopic = await Topic.findByIdAndDelete(id);
    if (!deletedTopic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }

    const topics = await Topic.find();
    return NextResponse.json({ message: "Topic deleted successfully", topics }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting topic", details: error.message }, { status: 500 });
  }
}



