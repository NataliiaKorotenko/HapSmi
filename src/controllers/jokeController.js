import Joke from "../models/jokeModel.js";

// Получить случайную шутку
export const getRandomJoke = async (req, res) => {
  try {
    const jokes = await Joke.find();
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.status(200).json(jokes[randomIndex]);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jokes" });
  }
};

// Получить шутки по категории
export const getJokesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const jokes = await Joke.find({ category });
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jokes" });
  }
};

// Добавить новую шутку
export const addJoke = async (req, res) => {
  try {
    const { text, category } = req.body;
    const newJoke = new Joke({ text, category });
    await newJoke.save();
    res.status(201).json(newJoke);
  } catch (error) {
    res.status(500).json({ error: "Failed to add joke" });
  }
};




