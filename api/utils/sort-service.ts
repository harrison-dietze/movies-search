import { Movie } from "../interfaces/movie.class";

const mergeSort = (items: Movie[], param: keyof Movie): Movie[] => {
  return divide(items, param);
};

function divide(items: Movie[], param: keyof Movie): Movie[] {
  let halfLength: number = Math.ceil(items.length / 2);
  let low: Movie[] = items.slice(0, halfLength);
  let high: Movie[] = items.slice(halfLength);

  if (halfLength > 1) {
    low = divide(low, param);
    high = divide(high, param);
  }
  return combine(low, high, param);
}

function combine(low: Movie[], high: Movie[], param: keyof Movie): Movie[] {
  let indexLow: number = 0;
  let indexHigh: number = 0;
  let lengthLow: number = low.length;
  let lengthHigh: number = high.length;
  let combined: Movie[] = [];
  while (indexLow < lengthLow || indexHigh < lengthHigh) {
    let lowItem: Movie = low[indexLow];
    let highItem: Movie = high[indexHigh];
    if (lowItem !== undefined) {
      if (highItem == undefined) {
        combined.push(lowItem);
        indexLow++;
      } else {
        if (lowItem[param] <= highItem[param]) {
          combined.push(lowItem);
          indexLow++;
        } else {
          combined.push(highItem);
          indexHigh++;
        }
      }
    } else {
      if (highItem !== undefined) {
        combined.push(highItem);
        indexHigh++;
      }
    }
  }
  return combined;
}

export const sortService = {
  mergeSort: mergeSort,
};
