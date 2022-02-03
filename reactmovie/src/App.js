import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';
import Genre from './routes/Genre';

function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path='/movie/:id'>
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/movie/:genre">
        <Genre />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
