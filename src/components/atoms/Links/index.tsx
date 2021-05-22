// react
import React from "react";

// react router dom
import { useHistory } from "react-router-dom";

// styles
import { StyledLink } from "./styles";

// -------------------------------
interface Props {
  text: string;
  path: string;
}

// ------------------------------
const Link: React.FC<Props> = ({ text, path }) => {
  const history = useHistory();

  const goTo = (path: string) => {
    history.push(path);
  };
  return <StyledLink onClick={() => goTo(path)}>{text}</StyledLink>;
};

export default Link;
