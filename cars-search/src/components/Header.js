import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { Button, SharedLayoutWrapper } from "../styledComponents";

const Header = () => {
  const navigate = useNavigate();

  const { user, isCars } = useAppContext();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <SharedLayoutWrapper>
      <h2>
        welcome <span>{user && isCars ? user.name : "guest"}</span>
      </h2>
      {user && isCars && <Button onClick={handleLogout}>logout</Button>}
    </SharedLayoutWrapper>
  );
};

export default Header;
