import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/home'
import ChatPage from './views/chatPage'
import BinaryTree from './views/binaryTree'
import Index from './views/Index'

interface IProps { }
interface IState { }

class App extends React.Component<IProps, IState>{
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Index}></Route>
          <Route path='/Home' component={Home}></Route>
          <Route path='/ChatPage' component={ChatPage}></Route>
          <Route path='/BinaryTree' component={BinaryTree}></Route>
        </div>
      </Router>

    )
  }
}

export default App;
