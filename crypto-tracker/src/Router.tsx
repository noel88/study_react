import {BrowserRouter, Switch, Route} from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";


interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

// function Router({isDark, toggleDark}:IRouterProps) {
// function Router({toggleDark}:IRouterProps) {
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          {/*<Coin isDark={isDark}  />*/}
          <Coin />
        </Route>
        <Route path="/" >
          {/*<Coins toggleDark={toggleDark}/>*/}
          <Coins/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
