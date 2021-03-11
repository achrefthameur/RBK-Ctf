import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../config/particlesConfig.js';

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
            <div style={{ position: 'absolute'}}>
              <Particles height="100vh" width="100vw" params={particlesConfig} />
            </div>
           <Navbar />          
      </div>)
    }
  }

  export default App