import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Signup from './components/Signup/Signup';
import AuthProvider from './Context/AuthProvider';
import Service from './components/Home/Service/Service';
import ServiceDetail from './components/Home/ServiceDetail/ServiceDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from '../src/components/Home/NotFound/NotFound'
import Footer from './components/Shared/Footer/Footer';
import Doctors from './components/Doctors/Doctors';
import MedicineShop from './components/MedicineShop/MedicineShop';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Service></Service>
            </Route>
            <PrivateRoute path="/serviceDetail/:userId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/medicineShop">
              <MedicineShop></MedicineShop>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
