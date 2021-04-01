// styles
import { StyledBar } from "./styles";

// atoms
import Link from "../../atoms/Links";

// ------------------------------
const Sidebar = () => {
  return (
    <StyledBar>
      <div>
        <Link>Home</Link>
        <Link>Sobre</Link>
        <Link>Tecnologias</Link>
        <Link>Projetos</Link>
      </div>
    </StyledBar>
  );
};

export default Sidebar;
