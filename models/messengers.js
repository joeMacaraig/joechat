// Messengers (USER) Model

import { Schema, model, models } from "mongoose";

const MessengerSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
  },
  username: {
    type: String,
    unique: [true, "Username already exists!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

const Messenger = models.Messengers || model("Messengers", MessengerSchema);

export default Messenger;