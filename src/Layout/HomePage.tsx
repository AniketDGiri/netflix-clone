import React from "react";
import { Row } from "./Row";
import { movieEndpoints } from "../constants";
import Banner from "./Banner";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Row
        title="Trendings"
        apiURL={movieEndpoints.fetchTrendings}
        isTrending={true}
      />

      <Row
        title="Netflix Originals"
        apiURL={movieEndpoints.fetchNetflixOriginals}
      />
      <Row title="Top Rated" apiURL={movieEndpoints.fetchTopRated} />
      <Row title="Action Movies" apiURL={movieEndpoints.fetchActionMovies} />
      <Row title="Comedy Movies" apiURL={movieEndpoints.fetchComedyMovies} />
      <Row title="Horror Movies" apiURL={movieEndpoints.fetchHorrorMovies} />
      <Row
        title="Documentaries"
        apiURL={movieEndpoints.fetchDocumentariesMovies}
      />
      <Row title="Romance Movies" apiURL={movieEndpoints.fetchRomanceMovies} />
    </div>
  );
};

export default HomePage;
