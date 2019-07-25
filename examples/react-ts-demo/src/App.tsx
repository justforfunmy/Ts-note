import React from 'react';
import './App.css';
import TestBar from './components/TestBar'

interface IProps{}
interface IState{}

class App extends React.Component<IProps,IState>{
  render(){
    return (
      <div>
        <TestBar></TestBar>
      </div>
    )
  }
}

export default App;
