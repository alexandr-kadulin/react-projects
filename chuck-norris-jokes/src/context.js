import React, { useState } from "react";
import data from "./data";
import fox from "./images/fox.jpg";
import hare from "./images/hare.jpg";
import raccoon from "./images/raccoon.jpg";
import squirrel from "./images/squirrel.jpg";
import hedgehog from "./images/hedgehog.jpg";

const AppContext = React.createContext();

let initialRecent = [];

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [jokes, setJokes] = useState([]);
  const [list, setList] = useState([]);
  // eslint-disable-next-line
  const [categories, setCategories] = useState(data);
  const [index, setIndex] = useState(0);

  const animals = {
    0: fox,
    1: hare,
    2: raccoon,
    3: squirrel,
    4: hedgehog,
  };

  const handleRefresh = (url) => {
    fetchData(url);
  };

  const setInitialRecent = (value) => {
    initialRecent = value;
  };

  const fetchData = async (url) => {
    setLoading(true);
    try {
      let newJokes = [];
      for (let index = 0; index < 5; index++) {
        const response = await fetch(url);
        if (response.status >= 200 && response.status <= 299) {
          const data = await response.json();
          newJokes.push(data);
          setLoading(false);
          initialRecent.push(data);
        } else {
          setLoading(false);
          setError(true);
        }
      }
      setJokes(newJokes);
      setList(initialRecent);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        jokes,
        list,
        index,
        categories,
        animals,
        setInitialRecent,
        setIndex,
        handleRefresh,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
