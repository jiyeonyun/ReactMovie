import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';
import Genre from './routes/Genre';

function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/">
          <Home />
      </Route>
      <Route path='/movie/:id'>
        <Detail />
      </Route>
      <Route path ='/page/:group/:page'>
        <Genre />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
