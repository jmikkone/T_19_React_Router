import React from 'react';
import './App.css';
import{BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to React Router</header>
      <Router>
      <div className="router">
        <Link className="home" to='/'>Home</Link>{' '}
        <Link className="about" to='/About'>About</Link>{' '}
        <Link className="contact" to='/Contact'>Contact</Link>{' '}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
          <Route render={() => <h1>Page not found</h1>}/>
        </Switch>
      </div>
      </Router>
      
    </div>
  );
}

export default App;
