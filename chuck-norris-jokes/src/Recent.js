import React, { useContext } from "react";
import _ from "lodash";
import { AppContext } from "./context";
import { MdOutlineDoubleArrow } from "react-icons/md";

function Recent() {
  const { list } = useContext(AppContext);

  return (
    <div className="section-center recent">
      <div className="section-title">
        <h2>recently viewed</h2>
      </div>
      {_.uniqBy(list, "id").map((item, index) => {
        const { id, value } = item;
        return (
          <article className="recent-card" key={id + index}>
            <div className="recent-center">
              <MdOutlineDoubleArrow className="recent-icon" />
              <p>{value}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Recent;
