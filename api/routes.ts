import { Router, Request, Response } from "express";
import { Movie } from "./interfaces/movie.class";
import { readService } from "./utils/read-service";
import { sortService } from "./utils/sort-service";
import { searchService } from "./utils/search-service";

const path = require("path");

const moviesFilePath: string = path.resolve(__dirname, "./csv-data/movies.csv");

const router = Router();

router.get("/movies", async (req: Request, res: Response) => {
  const filterValue: string = req.query.filter as string;
  const param: keyof Movie = req.query.param as keyof Movie;
  let arr: Movie[] = await readService.getCSVFileAsArray(moviesFilePath);
  arr = searchService.binarySearch(
    sortService.mergeSort(arr, param),
    param,
    filterValue
  );
  return res.send(arr);
});

export { router };
