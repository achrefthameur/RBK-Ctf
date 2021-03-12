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
          view : 'ScoarBoard'
      }
      this.ChangeView = this.ChangeView.bind(this)
    }


    RenderView(){
      const { view } = this.state
      console.log(view)
      if(view == 'ScoarBoard'){
        return <ScoarBoard />
      }else if(view ==  'SignUp'){
        return <SignUp />
      }else if(view ==  'Challanges'){
         return <Challanges />
      }
    }
    ChangeView(view){
      this.setState({view:view})
    }
  
    render () {
      return (    
      <div >
        
            <div style={{ position: 'absolute'}}>
            
              <Particles height="100vh" width="100vw" params={particlesConfig} />
              
            </div>
           <Navbar ChangeView={this.ChangeView} />
           {this.RenderView()}
                  
      </div>)
    }
  }

  export default App