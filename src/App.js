import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import AppointmentPage from './components/Pages/AppointmentPage';
import Login from './components/UserAuth/Login/Login';

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
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
