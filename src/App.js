import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import UserFormInput from "./components/forms/UserFormInput";

const App = () => {
  return (
    <div className='container parking-lot'>
      <h1>Parking System</h1>
      <h4>Version: 1.0</h4>
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/user-input' component={UserFormInput} exact />
      </Switch>
    </div>
  );
};

export default App;
