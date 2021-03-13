import React from 'react'


class Settings extends React.Component{
        constructor(props){
            super(props)
            this.state={
                name:'',
                lastname:'',
                email:'',
                alert:''
            }
        }
        HandleUpdate(){
            const {name,lastname,email} = this.state
            
           $.ajax({
                url:'/api/user/'+this.props.user_id,
                type:'PATCH',
                contentType:'application/json',
                data:JSON.stringify({user:{name:name,Lastname:lastname,email:email}}),
                success:(result)=>{
                    if(String(result).includes('user Updated')){
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
        componentDidMount(){
            $.ajax({
                url:'/api/user/'+this.props.user_id,
                type:'GET',
                contentType:'application/json',
                success:(user)=>{
                        this.setState({name:user.name,email:user.email,lastname:user.Lastname,})
                }
            })
        }
        render(){
            var alert = ''
            if(this.state.alert == 'success'){
                alert = <div className="alert alert-success" role="alert" >Changed Successfully ...</div>
            }else if(this.state.alert == "fail"){
                alert = <div className="alert alert-danger" role="alert" >Server Error</div>
            }
            return(
                <div className='CompConainer signup-container'>
                    <div id='title'>
                        <h1>Settings</h1>
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
    
                        <button type='button' className='btn btn-danger' onClick={()=>this.HandleUpdate()}>Change</button>
                        {alert}
                    </div>
    
                </div>
            )
        }
}

export default Settings;