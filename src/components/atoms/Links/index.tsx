// styles
import { StyledLink } from "./styles";

// -------------------------------
interface Props {
  children: string;
}

// ------------------------------
const Link = ({ children }: Props) => {
  return <StyledLink>{children}</StyledLink>;
};

export default Link;
