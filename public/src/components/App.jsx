import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from '../config/particlesConfig.js';
import $ from 'jquery'

import Navbar from './Navbar.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import ScoarBoard from './ScoardBoard.jsx';
import Challanges from './Challanges.jsx'
import Profile from './Profile.jsx'

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
      if(view == 'ScoarBoard'){
        return <ScoarBoard />
      }else if(view ==  'SignUp'){
        return <SignUp />
      }else if(view ==  'Challanges'){
         return <Challanges user_id={user_id} solved={solved} />
      }else if(view == 'SignIn'){
        return <Login />
      }else if(view == 'Profile'){
        return <Profile user_id={user_id} />
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
            if(typeof result === 'object'){
              this.setState({user_id:result.user_id,logged:true})
              $.ajax({
                url:'/api/solve/'+result.user_id,
                type:'GET',
                contentType:'application/json',
                success:(result)=>{
                      this.setState({solved:result})
                }
              })
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