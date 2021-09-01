import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AppointmentPage from './Components/AppointmentPage/AppointmentPage/AppointmentPage';
import Dashboard from './Components/Dashboard/Dashboard';
import AppointmentShortList from './Components/Dashboard/AppointmentShortList/AppointmentShortList';
import DashboardMain from './Components/Dashboard/DashboardMain/DashboardMain';
import AddDoctor from './Components/Dashboard/AddDoctor/AddDoctor';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute';
import Pescription from './Components/Dashboard/Pescription/Pescription';

export const userContext = createContext({});

function App() {
  const [login, setLogin] = useState({});
  console.log(login);
  return (
    <userContext.Provider value={[login, setLogin]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <AppointmentPage></AppointmentPage>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/allPatients">
            <AppointmentShortList></AppointmentShortList>
          </Route>
          <Route path="/appointments">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/dashboard-main">
            <DashboardMain></DashboardMain>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/pescription">
            <Pescription></Pescription>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
