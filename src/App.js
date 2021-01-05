import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import signIn from './components/Signup'
import SignIn from './components/Signin';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/actors" component={Home} />
        
      </div>
    </Router>
    <SignIn/>
    </div>
  );
}

export default App;
