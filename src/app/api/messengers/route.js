import { DatabaseConnect } from "../../../../lib/database";
import Messenger from "../../../../models/messengers";

export const GET = async (req, res) => {
  try {
    await DatabaseConnect();
    const Messengers = await Messenger.find({});
    return new Response(JSON.stringify(Messengers), { status: 200 });
  } catch (err) {
    return new Response("Failed to fetch all Messages", {
      error: err,
      status: 500,
    });
  }
};
