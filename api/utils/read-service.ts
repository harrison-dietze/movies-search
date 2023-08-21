import { Movie } from "../interfaces/movie.class";
import { csvUtils } from "../utils/csv-utils";

const fs = require("fs");

const csvToArray = (strFile: string): Movie[] => {
  const headers: string[] = csvUtils.mapHeaders(
    csvUtils.separateHeaders(strFile)
  );
  const rows = csvUtils.createRowEachLineBreak(strFile);
  const arr: any[] = csvUtils.formatRows(rows, headers);

  return arr.map((element): Movie => new Movie(element));
};

const getCSVFileAsArray = async (path: string) => {
  return csvToArray(fs.readFileSync(path, "UTF-8"));
};

export const readService = {
  getCSVFileAsArray: getCSVFileAsArray,
  csvToArray: csvToArray,
};
