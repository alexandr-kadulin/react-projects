import React, { useContext } from "react";
import { AppContext } from "./context";

function Total() {
  const { total } = useContext(AppContext);
  const { basePrice, color, power, warpDrive, optionPackage } = total;
  return (
    <section className="section main-column-2">
      <div className="total">
        <article className="summary">
          <div className="summary-column-1">
            <p>Base price:</p>
            <p>
              <span>{basePrice}€</span>
            </p>
          </div>
          <div className="summary-column-1">
            <p>Color:</p>
            <p>
              <span>+{color}€</span>
            </p>
          </div>
          <div className="summary-column-1">
            <p>Power:</p>
            <p>
              <span>+{power}€</span>
            </p>
          </div>
          <div className="summary-column-1">
            <p>Warp drive:</p>
            <p>
              <span>+{warpDrive}€</span>
            </p>
          </div>
          <div className="summary-column-1">
            <p>Option package:</p>
            <p>
              <span>+{optionPackage}€</span>
            </p>
          </div>
        </article>
        <article className="summary-column-2">
          <p>Total:</p>
          <p>
            <span>
              {basePrice + color + power + warpDrive + optionPackage}€
            </span>
          </p>
        </article>
      </div>
    </section>
  );
}

export default Total;
