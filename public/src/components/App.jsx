import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../config/particlesConfig.js';
import $ from 'jquery'

import Navbar from './Navbar.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import ScoarBoard from './ScoardBoard.jsx';
import Challanges from './Challanges.jsx'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          view : 'ScoarBoard',
          user_id:-1,
          logged:false,
          solved:[]
      }
      this.ChangeView = this.ChangeView.bind(this)
    }


    RenderView(){
      const { view,user_id,logged,solved } = this.state
      console.log(solved)
      if(view == 'ScoarBoard'){
        return <ScoarBoard />
      }else if(view ==  'SignUp'){
        return <SignUp />
      }else if(view ==  'Challanges'){
         return <Challanges user_id={user_id} solved={solved} />
      }else if(view == 'SignIn'){
        return <Login />
      }else if(view == 'logout'){
        $.ajax({
          url:'/api/logout',
          type:'GET',
          success:(res)=>{
            location.reload();
          }
        })
      }
    }
    ChangeView(view){
      this.setState({view:view})
    }

    componentDidMount(){
      $.ajax({
        url:'/api/session',
        type:'GET',
        contentType:'application/json',
        success:(result)=>{
            console.log(result)
            if(typeof result === 'object'){
              this.setState({user_id:result.Team_id,logged:true,solved:result.Solved})
            }
        }
      })
    }
  
    render () {
      return (    
      <div >
        
            <div style={{ position: 'absolute'}}>
            
              <Particles height="100vh" width="100vw" params={particlesConfig} />
              
            </div>
           <Navbar ChangeView={this.ChangeView} logged={this.state.logged} />
           {this.RenderView()}
                  
      </div>)
    }
  }

  export default App