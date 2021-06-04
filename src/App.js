import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
