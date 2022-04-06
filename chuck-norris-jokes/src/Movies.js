import React, { useEffect, useContext } from "react";
import { AppContext } from "./context";
import Loading from "./Loading";
import Controls from "./Controls";
import Recent from "./Recent";
import Error from "./Error";
import logo from "./images/logo.png";
import logo2 from "./images/logo2.png";

const url = "https://api.chucknorris.io/jokes/random?category=movie";

const jokerURL =
  "https://media3.giphy.com/media/fRlg6MIPpBvz2/giphy.gif?cid=ecf05e47yda60uazw16u7lpksbb9to0qp1zkrt5zpt4yndq3&rid=giphy.gif&ct=g";

const Movies = () => {
  const { loading, error, jokes, setInitialRecent, fetchData } =
    useContext(AppContext);

  useEffect(() => {
    setInitialRecent([]);
    fetchData(url);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <section className="section section-movies">
      <div className="section-title">
        <h2>
          category: <span>movies</span>
        </h2>
      </div>
      <div className="section-center movies-center">
        {jokes.map((joke, index) => {
          const { id, value } = joke;
          return (
            <article className="movie-card" key={id + index}>
              <div className="card-side card-front">
                <img src={logo} alt="movie" />
                <div className="card-info">
                  <p>{value}</p>
                  <div className="card-footer">
                    <img src={logo2} alt="movie" />
                    <p>amazing joke</p>
                  </div>
                </div>
              </div>
              <div className="card-side card-back">
                <img src={jokerURL} alt="movie" />
              </div>
            </article>
          );
        })}
      </div>
      <Controls url={url} />
      <Recent />
    </section>
  );
};

export default Movies;
