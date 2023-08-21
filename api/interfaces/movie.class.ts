export class Movie {
  name?: string;
  constructor(object: Partial<Movie>) {
    this.name = object.name;
  }
}
