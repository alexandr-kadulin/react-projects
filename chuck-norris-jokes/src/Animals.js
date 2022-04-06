import React, { useEffect, useContext } from "react";
import { AppContext } from "./context";
import Loading from "./Loading";
import Controls from "./Controls";
import Recent from "./Recent";
import Error from "./Error";

const url = "https://api.chucknorris.io/jokes/random?category=animal";

const Animals = () => {
  const { loading, error, jokes, animals, setInitialRecent, fetchData } =
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
    <section className="section section-animals">
      <div className="section-title">
        <h2>
          category: <span>animals</span>
        </h2>
      </div>
      <div className="section-center animals-center">
        {jokes.map((joke, index) => {
          const { id, value } = joke;
          return (
            <article className="animal-card fox" key={id + index}>
              <div className="animal-picture-container">
                <img
                  src={animals[index]}
                  alt="animal"
                  className="animal-picture"
                />
              </div>
              <p className="animal-text">{value}</p>
            </article>
          );
        })}
      </div>
      <Controls url={url} />
      <Recent />
    </section>
  );
};

export default Animals;
