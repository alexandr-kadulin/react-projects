import React, { useContext } from "react";
import { RiRefreshLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AppContext } from "./context";

function Controls({ url }) {
  const { handleRefresh } = useContext(AppContext);

  return (
    <div className="section-center">
      <Link to="/">
        <button className="btn">back home</button>
      </Link>
      <button className="btn" onClick={() => handleRefresh(url)}>
        <div className="refresh">
          get new
          <RiRefreshLine className="refresh-icon" />
        </div>
      </button>
    </div>
  );
}

export default Controls;
