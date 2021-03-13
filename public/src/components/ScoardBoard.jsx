import React from 'react'
import $ from 'jquery'

class ScoarBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            TopUsers : []
        }
    }
    componentDidMount(){
        $.ajax({
            url:'/api/scoardBoard',
            type:'GET',
            contentType:'application/json',
            success:(users)=>{
                this.setState({TopUsers:users})
            }
        })
    }

    render(){
        var {TopUsers} = this.state
        console.log(TopUsers)
        return(
            <div className='CompConainer'>
                <div id='title'>
                    <h1>ScoreBoard</h1>
                </div>
                <table className="table table-striped table-scoarboard">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">user</th>
                        <th scope="col">score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TopUsers.map((e,i)=><tr key={i} ><th scope="row">{i+1}</th><td>{e.username}</td><td>{e.score}</td></tr>)}

                    </tbody>
                    </table>
                
            </div>
        )
    }
}

export default ScoarBoard;