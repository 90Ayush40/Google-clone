
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route path="/search">
             {/* Search Page */}
            <SearchPage />
          </Route>
          <Route path="/">
            {/* Home Page */}
            <Home />
          </Route>

        </Switch>


      </Router>
      

     
    </div>
  );
}

export default App;
