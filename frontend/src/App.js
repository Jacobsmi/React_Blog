import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blog from './views/Blog';
import Login from './views/Login';
import SignUp from './views/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Blog />
          </Route>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/SignUp'>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
