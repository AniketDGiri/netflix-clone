import { MoviesData, APIOriginalData } from "./dataInterfaces";

export const convertAPIResponse = (apiData: APIOriginalData[]) => {
  const InitalMoviesList: MoviesData[] = [];

  apiData.map((eachItem: APIOriginalData, index: number) => {
    const TempList: any = {};
    for (const key in eachItem) {
      const objKey = key as keyof typeof eachItem;

      switch (objKey) {
        case "first_air_date": {
          TempList.firstAirDate = eachItem[objKey];
          break;
        }
        case "id": {
          TempList.id = eachItem[objKey];
          break;
        }
        case "name": {
          TempList.movieName = eachItem[objKey];
          break;
        }
        case "origin_country": {
          TempList.originCountry = eachItem[objKey];
          break;
        }
        case "original_language": {
          TempList.originalLanguage = eachItem[objKey];
          break;
        }
        case "overview": {
          TempList.overview = eachItem[objKey];
          break;
        }
        case "popularity": {
          TempList.popularity = eachItem[objKey];
          break;
        }
        case "poster_path": {
          TempList.posterPath = eachItem[objKey];
          break;
        }
        case "vote_average": {
          TempList.ratingAverage = eachItem[objKey];
          break;
        }
        case "vote_count": {
          TempList.ratingsCount = eachItem[objKey];
          break;
        }
        case "backdrop_path": {
          TempList.backDropPath = eachItem[objKey];
          break;
        }
      }
    }
    InitalMoviesList.push(TempList);
    return InitalMoviesList;
  });

  return InitalMoviesList;
};
