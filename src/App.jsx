import React from 'react'
import './App.css'
import HomePage from '../src/pages/homepage/homepage.component';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <HomePage />
      </div>
    );
  }
}

export default App;