import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, required: true },
});

const Joke = mongoose.model("Joke", jokeSchema);

export default Joke;
