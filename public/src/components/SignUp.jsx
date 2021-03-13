import React from 'react'
import $ from 'jquery'

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            name:'',
            lastname:'',
            email:'',
            alert:''
        }
    }
    HandleRegister(){
        const {username,password,name,lastname,email} = this.state
        
       $.ajax({
            url:'/api/register',
            type:'POST',
            contentType:'application/json',
            data:JSON.stringify({user:{username:username,password:password,name:name,lastname:lastname,email:email}}),
            success:(result)=>{
                if(String(result).includes('user Created')){
                    this.setState({alert:'success'})
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
            alert = <div className="alert alert-success" role="alert" >Sign Up Successfully ...</div>
        }else if(this.state.alert == "fail"){
            alert = <div className="alert alert-danger" role="alert" >Username Already taken </div>
        }
        return(
            <div className='CompConainer signup-container'>
                <div id='title'>
                    <h1>Register</h1>
                </div>

                <div className='Form-container '>
                <div className=" input-material">
                        <input type="text" className="form-control" id="name-field" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} required ></input>
                        <label htmlFor="name-field">Name</label>
                    </div>

                    <div className=" input-material">
                        <input type="text" className="form-control" id="lastname-field" value={this.state.lastname} onChange={(e)=>this.setState({lastname:e.target.value})} required ></input>
                        <label htmlFor="lastname-field">Last Name</label>
                    </div>

                    <div className=" input-material">
                        <input type="text" className="form-control" id="email-field" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} required ></input>
                        <label htmlFor="email-field">Email</label>
                    </div>


                    <div className=" input-material">
                        <input type="text" className="form-control" id="username-field" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} required ></input>
                        <label htmlFor="username-field">UserName</label>
                    </div>
                    <div className=" input-material">
                        <input type="password" className="form-control" id="name-field" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} required ></input>
                        <label htmlFor="name-field">Password</label>
                    </div>
                    <button type='button' className='btn btn-danger' onClick={()=>this.HandleRegister()}>Sign Up</button>
                    {alert}
                </div>

            </div>
        )
    }
}

export default SignUp;