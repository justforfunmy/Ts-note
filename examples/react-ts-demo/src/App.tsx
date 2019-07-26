import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/home'
import ChatPage from './views/chatPage'

interface IProps { }
interface IState { }

class App extends React.Component<IProps, IState>{
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}></Route>
          <Route path='chatPage' component={ChatPage}></Route>
        </div>
      </Router>

    )
  }
}

export default App;
