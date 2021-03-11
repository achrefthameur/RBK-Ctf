import React from 'react';

import Navbar from './Navbar.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import ScoarBoard from './ScoardBoard.jsx';
import Challanges from './Challanges.jsx'
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        
      }
    }

  
    render () {
      return (    
      <div >
           <Navbar />          
      </div>)
    }
  }

  export default App