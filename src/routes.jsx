import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Feira from "./pages/Feira";
import Carrinho from "./pages/Carrinho";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/feira" exact component={Feira} />
    <Route path="/carrinho" exact component={Carrinho} />
  </Switch>
);

export default Routes;
