import React from 'react'
import $ from 'jquery'

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Teamname:'',
            Teampassword:'',
            alert:''
        }
    }
    HandleRegister(){
        const {Teamname,Teampassword} = this.state
        
       $.ajax({
            url:'/api/register',
            type:'POST',
            contentType:'application/json',
            data:JSON.stringify({team:{name:Teamname,password:Teampassword}}),
            success:(result)=>{
                if(String(result).includes('Team Created')){
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
            alert = <div className="alert alert-danger" role="alert" >Name Already taken </div>
        }
        return(
            <div className='CompConainer signup-container'>
                <div id='title'>
                    <h1>Register</h1>
                </div>

                <div className='Form-container '>

                    <div className=" input-material">
                        <input type="text" className="form-control" id="name-field" value={this.state.Teamname} onChange={(e)=>this.setState({Teamname:e.target.value})} required ></input>
                        <label htmlFor="name-field">Team Name</label>
                    </div>
                    <div className=" input-material">
                        <input type="password" className="form-control" id="name-field" value={this.state.Teampassword} onChange={(e)=>this.setState({Teampassword:e.target.value})} required ></input>
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