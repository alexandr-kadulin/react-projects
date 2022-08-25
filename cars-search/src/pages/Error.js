import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import { ErrorWrapper } from "../styledComponents";

const Error = () => {
  return (
    <ErrorWrapper>
      <img src={img} alt="not found" />
      <div>
        <h3>Ohh! Page not found...</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/cars">back home</Link>
      </div>
    </ErrorWrapper>
  );
};

export default Error;
