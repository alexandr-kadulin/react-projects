import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Table } from "../components";
import { CarsWrapper } from "../styledComponents";

const Cars = () => {
  const { fetchAllCars } = useAppContext();

  useEffect(() => {
    fetchAllCars();
    // eslint-disable-next-line
  }, []);

  return (
    <CarsWrapper>
      <Table />
    </CarsWrapper>
  );
};

export default Cars;
