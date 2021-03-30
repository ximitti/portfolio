// react router dom
import { Route, Switch } from "react-router-dom";

// pages
import { Home, About, Skills, Projects } from "../pages";

// --------------------------------------
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/skills">
        <Skills />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
};

export default Routes;
