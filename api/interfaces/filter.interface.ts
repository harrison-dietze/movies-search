import { Movie } from "./movie.class";

export interface Filter {
  sort: keyof Movie;
}
