import { DatabaseConnect } from "../../../../../../lib/database";
import Message from "../../../../../../models/message";

export const GET = async (req, { params }) => {
  try {
    await DatabaseConnect();
    const message = await Message.find({ creator: params.id }).populate(
      "messenger"
    );
    return new Response(JSON.stringify(message.reverse()), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch user's message", {
      error: err,
      status: 500,
    });
  }
};
