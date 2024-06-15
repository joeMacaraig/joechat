import { DatabaseConnect } from "../../../../../lib/database";
import Message from "../../../../../models/message";

export const POST = async (req, res) => {
  const { userId, message } = await req.json();

  try {
    await DatabaseConnect();

    const newMessage = new Message({
      messenger: userId,
      message,
    });

    await newMessage.save();

    return new Response(JSON.stringify(newMessage), { status: 201 });
  } catch (err) {
    console.log({ error: err, msg: "Failed to create a message..." });
  }
};
