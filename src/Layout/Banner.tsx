import React, { useEffect, useState } from "react";
import apiCalls, { imageBaseURL } from "../utilities/apiCalls";
import { convertAPIResponse } from "../utilities/utilFunctions";
import { movieEndpoints } from "../constants";
import { MoviesData } from "../utilities/dataInterfaces";
import classes from "../customCSS/Banner.module.css";
import Navbar from "./Navbar";

const Banner = () => {
  const [movie, setMovie] = useState<Partial<MoviesData>>({});

  useEffect(() => {
    const getmovies = async () => {
      try {
        const { data, status } = await apiCalls(
          movieEndpoints.fetchNetflixOriginals
        );
        const [initialMoviesList] =
          status === 200
            ? convertAPIResponse([data.results[Math.floor(Math.random() * 20)]])
            : [];

        setMovie(initialMoviesList);
      } catch (err) {
        console.log("Error occured while fetching data in component: HomePage");
        console.log(err);
      }
    };
    getmovies();
  }, []);
  return (
    <header
      className={`${classes.banner}`}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${imageBaseURL}${movie?.backDropPath})`,
        backgroundPosition: "center center",
      }}
    >
      <Navbar />
      <div className={`${classes.banner_contents}`}>
        <h1 className={`${classes.banner_title}`}>{movie?.movieName}</h1>
        <div>
          <button className={`${classes.banner_buttons}`}>Play</button>
          <button className={`${classes.banner_buttons}`}>My List</button>
        </div>
        <h1 className={`${classes.banner_description} line-clamp-3`}>
          {movie?.overview}
        </h1>
      </div>
      <div className={`${classes.banner_fadeBottom}`}></div>
    </header>
  );
};

export default Banner;
