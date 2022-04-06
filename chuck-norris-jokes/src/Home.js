import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "./context";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { SiStartrek } from "react-icons/si";
import { FaVolleyballBall, FaCat } from "react-icons/fa";

function Home() {
  const { index, setIndex, categories } = useContext(AppContext);

  useEffect(() => {
    const lastIndex = categories.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
    // eslint-disable-next-line
  }, [index, categories]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
    // eslint-disable-next-line
  }, [index]);

  return (
    <section className="section section-home">
      <div className="section-title">
        <h2>chuck norris jokes</h2>
      </div>
      <div className="home-center">
        {categories.map((category, categoryIndex) => {
          const { id, name, description } = category;
          let position = "nextSlide";
          if (categoryIndex === index) {
            position = "activeSlide";
          }
          if (
            categoryIndex === index - 1 ||
            (index === 0 && categoryIndex === categories.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <Link
                to={id === 1 ? "/sports" : id === 2 ? "/movies" : "/animals"}
              >
                <button className="btn home-btn">go</button>
              </Link>
              <h4 className="home-title">
                <span>{name}</span>
              </h4>
              <p className="home-text">{description}</p>
              {id === 1 ? (
                <FaVolleyballBall className="home-icon" />
              ) : id === 2 ? (
                <SiStartrek className="home-icon" />
              ) : (
                <FaCat className="home-icon" />
              )}
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Home;
