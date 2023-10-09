export class Movie {
  public title?: string;
  public genres?: string[];
  public releaseDate?: Date;
  public popularity?: number;
  public overview?: string;
  public budget?: number;
  public revenue?: number;

  constructor(object: Partial<Movie>) {
    this.title = object.title;
    this.genres = this.makeGenreListFromString(object.genres as any);
    this.overview = object.overview;

    this.releaseDate = isNaN(new Date(object["release_date"]).getTime())
      ? null
      : new Date(object["release_date"]);
    this.popularity = object.popularity;
    this.budget = object.budget;
    this.revenue = object.revenue;
  }

  private makeGenreListFromString(genresString: string): string[] {
    const removableStrings: string[] = [", ", "[", "]"];
    return (genresString || "")
      .split(`'`)
      .filter((item) => !removableStrings.includes(item));
  }
}
