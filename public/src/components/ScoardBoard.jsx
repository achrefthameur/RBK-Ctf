import React from 'react'
import $ from 'jquery'

class ScoarBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            TopTeams : []
        }
    }
    componentDidMount(){
        $.ajax({
            url:'/api/scoardBoard',
            type:'GET',
            contentType:'application/json',
            success:(teams)=>{
                console.log(teams)
                this.setState({TopTeams:teams})
            }
        })
    }

    render(){
        const {TopTeams} = this.state
        return(
            <div id='score-Board'>
                <div id='title'>
                    <h1>ScoreBoard</h1>
                </div>
                <table className="table table-striped table-scoarboard">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">team</th>
                        <th scope="col">score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TopTeams.map((e,i)=>{
                            <tr>
                            <th scope="row">{i}</th>
                            <td>{e.name}</td>
                            <td>{e.score}</td>
                            </tr>
                        })}

                    </tbody>
                    </table>
                
            </div>
        )
    }
}

export default ScoarBoard;