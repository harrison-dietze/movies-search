import { Router, Request, Response } from "express";
import { Movie } from "./interfaces/movie.class";
import { readService } from "./utils/read-service";
import { sortService } from "./utils/sort-service";
import { searchService } from "./utils/search-service";
import { SortingDirectionEnum } from "./enums/sorting-direction.enum";

const path = require("path");

const moviesFilePath: string = path.resolve(__dirname, "./csv-data/movies.csv");

const router = Router();

router.get("/movies", async (req: Request, res: Response) => {
  const filterValue: string = req.query.filter as string;
  const param: keyof Movie = req.query.param as keyof Movie;
  const sortColumn: keyof Movie = req.query.sortColumn as keyof Movie;
  const direction: SortingDirectionEnum = req.query
    .direction as SortingDirectionEnum;

  let arr: Movie[] = await readService.getCSVFileAsArray(moviesFilePath);
  arr = sortService.mergeSort(
    searchService.binarySearch(
      sortService.mergeSort(arr, param, direction),
      param,
      filterValue
    ),
    sortColumn,
    direction
  );

  if (direction == "D") {
    arr.reverse();
    arr.slice(1, arr.length);
  }

  return res.send(arr);
});

export { router };
