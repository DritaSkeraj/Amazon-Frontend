import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Products from "./components/Products";
import MyFooter from "./components/MyFooter";
import SingleProductPage from "./components/SingleProductPage";
import Backoffice from "./components/Backoffice";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Router>
      <Switch>
        <Route exact path="/backoffice">
          <Backoffice/>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        </Switch>
        <Switch>
        <Route exact path="/products/:id">
          <SingleProductPage />
        </Route>
        </Switch>
      </Router>
      <MyFooter />

    </div>
  );
}

export default App;
