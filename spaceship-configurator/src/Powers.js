import React, { useContext } from "react";
import { AppContext } from "./context";

function Powers() {
  const { handleClickPower1, handleClickPower2, handleClickPower3, powerID } =
    useContext(AppContext);

  return (
    <section className="section">
      <h2>Select power:</h2>
      <div className="powers powers-center">
        <article
          className={`power ${powerID === 1 ? "active-border" : ""}`}
          onClick={handleClickPower1}
        >
          <p className={`power-limit ${powerID === 1 ? "active-color" : ""}`}>
            100 MW
          </p>
          <p className={`${powerID === 1 ? "active-color" : ""}`}>+0€</p>
        </article>
        <article
          className={`power ${powerID === 2 ? "active-border" : ""}`}
          onClick={handleClickPower2}
        >
          <p className={`power-limit ${powerID === 2 ? "active-color" : ""}`}>
            150 MW
          </p>
          <p className={`${powerID === 2 ? "active-color" : ""}`}>+200€</p>
        </article>
        <article
          className={`power ${powerID === 3 ? "active-border" : ""}`}
          onClick={handleClickPower3}
        >
          <p className={`power-limit ${powerID === 3 ? "active-color" : ""}`}>
            200 MW
          </p>
          <p className={`${powerID === 3 ? "active-color" : ""}`}>+500€</p>
        </article>
      </div>
    </section>
  );
}

export default Powers;
