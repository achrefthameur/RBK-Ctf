import React from 'react'

class Profile extends React.Component{
        constructor(props){
            super(props)
            this.state={
                user:{}
            }
        }
        componentDidMount(){
            $.ajax({
                url:'/api/user/'+this.props.user_id,
                type:'GET',
                contentType:'application/json',
                success:(user)=>{
                        this.setState({user:user})
                }
            })
        }
        render(){
            const {user} = this.state
            console.log(user)
            return(
                <div id="profileContainer">
                    <div id='LeftProfile'>
                       <img src="./assets/images/profile.png" width="180px" ></img>
                       <div id="ProfileName">
                            {user.name + ' ' + user.Lastname}
                       </div>
                    </div>
                    <div id='RightProfile'>
                        <div className="ProfileInfo">
                        <h1 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h1>
                            <hr />
                            <div className="container InfoContainer">
                                <div className="row">
                                    <div className="col titleInfo">Name</div>
                                    <div className="col titleInfo">Last Name</div>
                                    <div className="w-100"></div>
                                    <div className="col ParaInfo">{user.name}</div>
                                    <div className="col ParaInfo">{user.Lastname}</div>
                                </div>
                                <div className="row EmailInfo">
                                    <div className="col titleInfo">Email</div>
                                    <div className="w-100"></div>
                                    <div className="col ParaInfo">{user.email}</div>
                                </div>
                            </div>
                        </div>
                        <div className="ProfileInfo">
                        <h1 className="m-b-20 p-b-5 b-b-default f-w-600">Ctf Stats</h1>
                            <hr />
                            <div className="container InfoContainer">
                                <div className="row">
                                    <div className="col titleInfo">Score</div>
                                    <div className="w-100"></div>
                                    <div className="col ParaInfo">{user.score}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}

export default Profile;