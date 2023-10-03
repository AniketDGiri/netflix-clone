import React, { useEffect, useState } from "react";
import apiCalls, { imageBaseURL } from "../utilities/apiCalls";
import { movieUrl } from "../constants";
import { MoviesData } from "../utilities/dataInterfaces";
import { convertAPIResponse } from "../utilities/utilFunctions";
import classes from "../customCSS/MovieListCSS.module.css";
import YouTube from "react-youtube";

export const Row = ({ title, apiURL, isTrending }: movieUrl) => {
  const [moviesList, setMoviesList] = useState<MoviesData[]>([]);

  const [trailerURL, setTrailerURL] = useState("");

  //useEffect hook to fetch the data
  useEffect(() => {
    const getmovies = async () => {
      try {
        const { data, status } = await apiCalls(apiURL);
        const initialMoviesList =
          status === 200 ? convertAPIResponse(data.results) : [];
        console.log("Initial Movies list:", initialMoviesList);
        setMoviesList(initialMoviesList);
      } catch (err) {
        console.log("Error occured while fetching data in component: HomePage");
        console.log(err);
      }
    };
    getmovies();
  }, [apiURL]);

  const youtubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  //976573

  return (
    <div>
      <h1 className="font-bold text-2xl mt-2   text-cyan-50">{title}</h1>
      <div className={`flex ${classes["div-movie-list"]}`}>
        {/* {moviesList
          .filter((item) => {
            return item.ratingAverage > 8;
          })
          .slice(0, 10)
          .map((item) => {
            return (
              <Card
                movieName={item.movieName}
                overview={item.overview}
                image={item.posterPath}
                key={item.id}
              />
            );
          })} */}

        {moviesList.map((item) => (
          <img
            src={`${imageBaseURL}${item.posterPath}`}
            alt={item.movieName}
            className={`${classes["movie-image"]} ${
              isTrending && classes["movie-trending-image"]
            }`}
            key={item.id}
          />
        ))}
      </div>

      <div>
        {trailerURL && <YouTube videoId={trailerURL} opts={youtubeOpts} />}
      </div>
    </div>
  );
};
