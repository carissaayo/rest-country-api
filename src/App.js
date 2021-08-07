import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Countries from "./components/Countries";
import CountryScreen  from "./components/CountryScreen";
import BorderCountryScreen from "./screens/BorderCountryScreen";

import {useGlobalContext} from './Context'
function App() {
  const {darkMode,loading} = useGlobalContext()
  
  return loading ? (
    <h1 className="loading">loading...</h1>
  ) : (
    <Router>
      <div className={`${darkMode ? "App dark-mode" : "App"}`}>
        <Header />
        <Switch>
          <Route exact path="/" component={Countries} />
          <Route path="/country/:name" component={CountryScreen} />
          <Route path="/border/:name" component={BorderCountryScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
