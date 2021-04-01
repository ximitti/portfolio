// styles
import { Wrapper } from "./styles";
// components
import Sidebar from "./components/molecules/Sidebar";
import Routes from "./routes";
// -----------------------
const App = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Routes />
    </Wrapper>
  );
};

export default App;
