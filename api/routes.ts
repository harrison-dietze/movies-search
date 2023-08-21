import { Router, Request, Response } from "express";
import { Movie } from "./interfaces/movie.class";
import { readService } from "./utils/read-service";

const path = require("path");

const moviesFilePath: string = path.resolve(
  __dirname,
  "./csv-data/entering-students.csv"
);

const router = Router();

router.get("/movies", async (req: Request, res: Response) => {
  let arr: Movie[] = await readService.getCSVFileAsArray(moviesFilePath);

  return res.send(arr);
});

export { router };
