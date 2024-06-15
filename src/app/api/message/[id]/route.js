// GET, PATCH, DELETE message

import { DatabaseConnect } from "../../../../../lib/database";
import Message from "../../../../../models/message";

// GET
export const GET = async (req, { params }) => {
  try {
    await DatabaseConnect();

    const message = await Message.findById(params.id).populate("messenger");

    // if no message
    if (!message)
      return new Response(JSON.stringify("Message not found"), { status: 404 });

    //return message
    return new Response(JSON.stringify(message), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch user's message", {
      error: err,
      status: 500,
    });
  }
};

// PATCH
export const PATCH = async (req, { params }) => {
  const { message, tag } = await req.json();
  try {
    await DatabaseConnect();

    const existing = await Message.findById(params.id);

    if (!existing) return new Repsonse("Message not found", { status: 404 });

    existing.message = message;
    existing.tag = tag;

    await existing.save();

    return new Response(JSON.stringify(existing), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to update user's message", { status: 500 });
  }
};

// Delete
export const DELETE = async (req, { params }) => {
  try {
    await DatabaseConnect();

    await Message.findByIdAndDelete(params.id);

    return new Response("Successfully Deleted Message", { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to delete user's message", {
      error: err,
      status: 500,
    });
  }
};
