import React, { useContext } from "react";
import { AppContext } from "./context";

function Colors() {
  const { handleClickColor1, handleClickColor2, handleClickColor3, colorID } =
    useContext(AppContext);

  return (
    <section className="section">
      <h2>Select color:</h2>
      <div className="colors colors-center">
        <article
          className={`color ${colorID === 1 ? "active-border" : ""}`}
          onClick={handleClickColor1}
        >
          <div className="snow"></div>
          <p className={`color-price ${colorID === 1 ? "active-color" : ""}`}>
            +0€
          </p>
          <p className={`${colorID === 1 ? "active-color" : ""}`}>Snow</p>
        </article>
        <article
          className={`color ${colorID === 2 ? "active-border" : ""}`}
          onClick={handleClickColor2}
        >
          <div className="volcano"></div>
          <p className={`color-price ${colorID === 2 ? "active-color" : ""}`}>
            +100€
          </p>
          <p className={`${colorID === 2 ? "active-color" : ""}`}>Volcano</p>
        </article>
        <article
          className={`color ${colorID === 3 ? "active-border" : ""}`}
          onClick={handleClickColor3}
        >
          <div className="sky"></div>
          <p className={`color-price ${colorID === 3 ? "active-color" : ""}`}>
            +100€
          </p>
          <p className={`${colorID === 3 ? "active-color" : ""}`}>Sky</p>
        </article>
      </div>
    </section>
  );
}

export default Colors;
