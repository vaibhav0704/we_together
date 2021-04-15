import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from './pages/profile';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
