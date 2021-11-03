import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import AppointmentPage from './components/Pages/AppointmentPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/appointment">
            <AppointmentPage />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
