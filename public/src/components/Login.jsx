import React from 'react'
import $ from 'jquery'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            alert:''
        }
    }
    HandleLogin(){
        const {username,password} = this.state
        
       $.ajax({
            url:'/api/login',
            type:'POST',
            contentType:'application/json',
            data:JSON.stringify({user:{username:username,password:password}}),
            success:(result)=>{
                if(String(result).includes('success')){
                    this.setState({alert:'success'})
                    setTimeout(()=>location.reload(),1000)
                }else{
                    this.setState({alert:'fail'})
                }
            },
            error:(err)=>{
                console.log(err)
            }
       }) 
    }
    render(){
        var alert = ''
        if(this.state.alert == 'success'){
            alert = <div className="alert alert-success" role="alert" >Sign In Successfully ...</div>
        }else if(this.state.alert == "fail"){
            alert = <div className="alert alert-danger" role="alert" > Wrong Password Or Username </div>
        }
        return(
            <div className='CompConainer signup-container'>
                <div id='title'>
                    <h1>Login</h1>
                </div>

                <div className='Form-container '>

                    <div className=" input-material">
                        <input type="text" className="form-control" id="name-field" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} required ></input>
                        <label htmlFor="name-field">UserName</label>
                    </div>
                    <div className=" input-material">
                        <input type="password" className="form-control" id="name-field" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} required ></input>
                        <label htmlFor="name-field">Password</label>
                    </div>
                    <button type='button' className='btn btn-danger' onClick={()=>this.HandleLogin()}>Log In</button>
                    {alert}
                </div>

            </div>
        )
    }
}

export default Login;