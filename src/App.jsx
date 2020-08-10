import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/app/Loading";

const Nav = lazy(() => import("./components/app/Nav"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router onch>
      <Suspense fallback={<Loading />}>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
