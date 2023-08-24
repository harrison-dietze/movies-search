export class Movie {
  public title?: string;
  public genres?: string[];
  public releaseDate?: Date;
  public popularity?: number;

  constructor(object: Partial<Movie>) {
    this.title = object.title;
    this.genres = this.makeGenreListFromString(object.genres as any);
    this.releaseDate = new Date(object["release_date"]);
    this.popularity = object.popularity;
  }

  private makeGenreListFromString(genresString: string): string[] {
    const removableStrings: string[] = [", ", "[", "]"];
    return genresString
      .split(`'`)
      .filter((item) => !removableStrings.includes(item));
  }
}
