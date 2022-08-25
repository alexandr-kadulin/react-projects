import { SharedLayoutWrapper } from "../styledComponents";

const Footer = () => {
  return (
    <SharedLayoutWrapper>
      <h5>
        &copy; {new Date().getFullYear()} Cars Search. All rights reserved
      </h5>
    </SharedLayoutWrapper>
  );
};

export default Footer;
