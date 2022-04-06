import React, { useEffect, useContext } from "react";
import { AppContext } from "./context";
import Loading from "./Loading";
import Controls from "./Controls";
import Recent from "./Recent";
import Error from "./Error";

const url = "https://api.chucknorris.io/jokes/random?category=sport";

const Sports = () => {
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
    <section className="section section-sports">
      <div className="section-title">
        <h2>
          category: <span>sports</span>
        </h2>
      </div>
      <div className="sports-center section-center">
        {jokes.map((joke, index) => {
          const { id, value, icon_url } = joke;
          return (
            <article className="sport-card" key={id + index}>
              <div className="sport-icon">
                <img src={icon_url} alt="sport" />
              </div>
              <h4>amazing joke</h4>
              <div className="underline"></div>
              <p>{value}</p>
            </article>
          );
        })}
      </div>
      <Controls url={url} />
      <Recent />
    </section>
  );
};

export default Sports;
