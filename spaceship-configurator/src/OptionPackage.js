import React, { useContext } from "react";
import { AppContext } from "./context";
import { BsFillTriangleFill } from "react-icons/bs";

function OptionPackage() {
  const {
    handleClickPackage1,
    handleClickPackage2,
    handleClickPackage3,
    packageID,
  } = useContext(AppContext);

  return (
    <section className="section">
      <h2>Select option package:</h2>
      <div className="packages-center">
        <article
          className={`package ${packageID === 1 ? "active-border" : ""}`}
          onClick={handleClickPackage1}
        >
          <div className="package-center">
            <div className="package-info">
              <p
                className={`package-type ${
                  packageID === 1 ? "active-color" : ""
                }`}
              >
                Basic
              </p>
            </div>
            <div
              className={`package-details ${
                packageID === 1 ? "active-color" : ""
              }`}
            >
              <ul className="package-list">
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Air conditioning
                </li>
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Cloth seats
                </li>
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Fm radio
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article
          className={`package ${packageID === 2 ? "active-border" : ""}`}
          onClick={handleClickPackage2}
        >
          <div className="package-center">
            <div className="package-info">
              <p
                className={`package-type ${
                  packageID === 2 ? "active-color" : ""
                }`}
              >
                Sport
              </p>
              <p className={`${packageID === 2 ? "active-color" : ""}`}>
                +100€
              </p>
            </div>
            <div
              className={`package-details ${
                packageID === 2 ? "active-color" : ""
              }`}
            >
              <ul className="package-list">
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Air conditioning
                </li>
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Cloth seats
                </li>
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Fm radio
                </li>
                <li className="list-item list-item-mod">
                  <BsFillTriangleFill className="list-icon" />
                  Personal tech <span>support</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article
          className={`package ${packageID === 3 ? "active-border" : ""}`}
          onClick={handleClickPackage3}
        >
          <div className="package-center">
            <div className="package-info">
              <p
                className={`package-type ${
                  packageID === 3 ? "active-color" : ""
                }`}
              >
                Lux
              </p>
              <p className={`${packageID === 3 ? "active-color" : ""}`}>
                +500€
              </p>
            </div>
            <div
              className={`package-details ${
                packageID === 3 ? "active-color" : ""
              }`}
            >
              <ul className="package-list">
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Air conditioning
                </li>
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Luxury seats
                </li>
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Fm radio
                </li>
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Chrome weels
                </li>
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Window tint
                </li>
                <li className="list-item">
                  <BsFillTriangleFill className="list-icon" />
                  Subwoofer
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default OptionPackage;
