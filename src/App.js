import './assets/scss/style.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
