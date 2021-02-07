import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/layout/Nav'

function App() {
  return (
    <div className="App">
        <Nav />
    </div>
  );
}

export default App;
