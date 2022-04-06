import React, { useContext } from "react";
import { AppContext } from "./context";

function WarpDrive() {
  const { handleClickDrive1, handleClickDrive2, driveID } =
    useContext(AppContext);

  return (
    <section className="section">
      <h2>Warp drive:</h2>
      <div className="impulses impulses-center">
        <article
          className={`impulse ${driveID === 1 ? "active-border" : ""}`}
          onClick={handleClickDrive1}
        >
          <p
            className={`impulse-choice ${driveID === 1 ? "active-color" : ""}`}
          >
            NO
          </p>
          <p className={`${driveID === 1 ? "active-color" : ""}`}>+0€</p>
        </article>
        <article
          className={`impulse ${driveID === 2 ? "active-border" : ""}`}
          onClick={handleClickDrive2}
        >
          <p
            className={`impulse-choice ${driveID === 2 ? "active-color" : ""}`}
          >
            YES
          </p>
          <p className={`${driveID === 2 ? "active-color" : ""}`}>+1000€</p>
        </article>
      </div>
    </section>
  );
}

export default WarpDrive;
