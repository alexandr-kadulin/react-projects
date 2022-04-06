import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const defaultTotal = {
    basePrice: 1000,
    color: 0,
    power: 200,
    warpDrive: 0,
    optionPackage: 0,
    summary: 1200,
  };

  const [colorID, setColorID] = useState(1);
  const [powerID, setPowerID] = useState(2);
  const [driveID, setDriveID] = useState(1);
  const [packageID, setPackageID] = useState(1);
  const [total, setTotal] = useState(defaultTotal);

  const handleClickColor1 = () => {
    const newTotal = { ...total, color: 0 };

    setColorID(1);
    setTotal(newTotal);
  };
  const handleClickColor2 = () => {
    const newTotal = { ...total, color: 100 };

    setColorID(2);
    setTotal(newTotal);
  };
  const handleClickColor3 = () => {
    const newTotal = { ...total, color: 100 };

    setColorID(3);
    setTotal(newTotal);
  };

  const handleClickPower1 = () => {
    const newTotal = { ...total, power: 0 };

    setPowerID(1);
    setTotal(newTotal);
  };
  const handleClickPower2 = () => {
    const newTotal = { ...total, power: 200 };

    setPowerID(2);
    setTotal(newTotal);
  };
  const handleClickPower3 = () => {
    const newTotal = { ...total, power: 500 };

    setPowerID(3);
    setTotal(newTotal);
  };

  const handleClickDrive1 = () => {
    const newTotal = { ...total, warpDrive: 0 };

    setDriveID(1);
    setTotal(newTotal);
  };
  const handleClickDrive2 = () => {
    const newTotal = { ...total, warpDrive: 1000 };

    setDriveID(2);
    setTotal(newTotal);
  };

  const handleClickPackage1 = () => {
    const newTotal = { ...total, optionPackage: 0 };

    setPackageID(1);
    setTotal(newTotal);
  };
  const handleClickPackage2 = () => {
    const newTotal = { ...total, optionPackage: 100 };

    setPackageID(2);
    setTotal(newTotal);
  };
  const handleClickPackage3 = () => {
    const newTotal = { ...total, optionPackage: 500 };

    setPackageID(3);
    setTotal(newTotal);
  };

  return (
    <AppContext.Provider
      value={{
        handleClickColor1,
        handleClickColor2,
        handleClickColor3,
        handleClickPower1,
        handleClickPower2,
        handleClickPower3,
        handleClickDrive1,
        handleClickDrive2,
        handleClickPackage1,
        handleClickPackage2,
        handleClickPackage3,
        colorID,
        powerID,
        driveID,
        packageID,
        total,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
