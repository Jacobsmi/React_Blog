import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Blog from './views/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/'>
            <Blog />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
