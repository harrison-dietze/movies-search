import { Movie } from "../interfaces/movie.class";
import { stringUtils } from "./string-utils";

const binarySearch = (
  list: Movie[],
  param: keyof Movie,
  value: string
): Movie[] => {
  if (!value || value == "") return list;
  const filteredList: Movie[] = [];
  value = stringUtils.normalizeLower(value);

  let start: number = 0;
  let end: number = list.length - 1;

  let halfLength: number = null;
  let firstIndex: number = null;

  while (start <= end) {
    halfLength = Math.ceil((start + end) / 2);

    const element: string = stringUtils.normalizeLower(
      list[halfLength][param] as string
    );

    if (element && element.includes(value)) {
      firstIndex = halfLength;
      filteredList.push(list[halfLength]);

      let foundAllNexts: boolean = false;
      let currentIndex: number = firstIndex + 1;

      while (!foundAllNexts) {
        if (
          stringUtils
            .normalizeLower(list[currentIndex][param] as string)
            .includes(value)
        )
          filteredList.push(list[currentIndex]);
        else foundAllNexts = true;
        currentIndex++;

        if (currentIndex == list.length) foundAllNexts = true;
      }

      let foundAllPrevious: boolean = false;
      currentIndex = firstIndex - 1;

      while (!foundAllPrevious) {
        if (
          stringUtils
            .normalizeLower(list[currentIndex][param] as string)
            .includes(value)
        )
          filteredList.push(list[currentIndex]);
        else foundAllPrevious = true;
        currentIndex--;
        if (currentIndex == 0) foundAllPrevious = true;
      }

      break;
    } else if (element > value) end = halfLength - 1;
    else if (element < value) start = halfLength + 1;
  }

  return filteredList;
};

export const searchService = {
  binarySearch: binarySearch,
};
