import { Router } from "express";
import { getRandomJoke, getJokesByCategory, addJoke } from "../controllers/jokeController.js";

const jokeRouter = Router();

jokeRouter.get("/random", getRandomJoke); // Случайная шутка

jokeRouter.get("/category/:category", getJokesByCategory); // Шутка по категории

jokeRouter.post("/", addJoke); // Добавление шутки

export default jokeRouter;
