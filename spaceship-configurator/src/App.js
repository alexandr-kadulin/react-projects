import React from "react";
import Colors from "./Colors";
import Powers from "./Powers";
import WarpDrive from "./WarpDrive";
import OptionPackage from "./OptionPackage";
import Total from "./Total";

function App() {
  return (
    <section className="container">
      <h1>Spaceship configurator</h1>
      <div className="main-center">
        <div className="main-column-1">
          <Colors />
          <Powers />
          <WarpDrive />
          <OptionPackage />
        </div>
        <Total />
      </div>
    </section>
  );
}

export default App;
