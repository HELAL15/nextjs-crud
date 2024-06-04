import connectDB from "@/libs/db";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { newTitle: title, newDesc: description } = await request.json();
    await connectDB();

    const updatedTopic = await Topic.findByIdAndUpdate(id, { title, description }, { new: true });

    if (!updatedTopic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Topic updated successfully", updatedTopic }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error updating topic", details: error.message }, { status: 500 });
  }
}

export async function GET({params}) {
  try{
    const { id } = params;
    await connectDB()

    const topic = await Topic.findOne({_id: id })

    if (!topic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Topic found successfully", topic }, { status: 200 });
  }catch (error){
    return NextResponse.json({ error: "error finding topic", details: error.message }, { status: 500 });
  }
}


