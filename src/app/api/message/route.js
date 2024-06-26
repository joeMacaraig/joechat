import { DatabaseConnect } from "../../../../lib/database";
import Message from "../../../../models/message";

export const GET = async (req, res) => {
  try {
    await DatabaseConnect();
    const Messages = await Message.find({}).populate("messenger");
    return new Response(JSON.stringify(Messages), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch all Messages", {
      error: err,
      status: 500,
    });
  }
};
