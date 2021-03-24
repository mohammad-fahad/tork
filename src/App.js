

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Get from './Components/Get';
import Post from './Components/Post';
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Get />
          </Route>
          <Route path="/get">
            <Get />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
