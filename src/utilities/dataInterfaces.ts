export interface MoviesData {
  id: number;
  firstAirDate: string;
  movieName: string;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath: string;
  ratingAverage: number;
  ratingsCount: number;
  backDropPath: string;
}

export interface APIOriginalData {
  id: number;
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
}
