import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import City from "./Pages/City/City";
import Navbar from "./components/navbar/Navbar";
import Name from "./Pages/Name/Name";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Name} />
          <Route exact path="/city" component={City} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
