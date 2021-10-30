import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Tentang from "./pages/tentang/Tentang";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {  
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/Tentang">
          <Tentang />
        </Route>        
      </Switch>
    </Router>
  );
}

export default App;
