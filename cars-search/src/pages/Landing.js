import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import { Button, LandingColumn, LandingWrapper } from "../styledComponents";
import main from "../assets/images/main.svg";

const Landing = () => {
  const { hideLogout } = useAppContext();

  useEffect(() => {
    hideLogout();
    // eslint-disable-next-line
  }, []);

  return (
    <LandingWrapper>
      <LandingColumn>
        <h1>
          cars <span>searching</span> app
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
          voluptates tenetur aperiam assumenda voluptate quam, impedit rem.
          Cumque, doloremque inventore excepturi quo facere in similique.
          Temporibus, quisquam expedita! Rem, nemo.
        </p>
        <Link to="/register">
          <Button>Login/Register</Button>
        </Link>
      </LandingColumn>
      <LandingColumn>
        <img src={main} alt="cars" />
      </LandingColumn>
    </LandingWrapper>
  );
};

export default Landing;
