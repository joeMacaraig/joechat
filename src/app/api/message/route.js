import { connectToDB } from "../../../../utils/database";
import Message from "../../../../models/message";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const Messages = await Message.find({}).populate("messenger");
    return new Response(JSON.stringify(Messages.reverse()), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch a;; Messages", {
      error: err,
      status: 500,
    });
  }
};
