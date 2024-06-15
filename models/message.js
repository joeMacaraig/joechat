// Message Model
import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
  messenger: {
    type: Schema.Types.ObjectId,
    ref: "Messengers",
  },
  message: {
    type: String,
    required: [true, "Message is required."],
  },
});

const Message = models.Messages || model("Messages", MessageSchema);

export default Message;