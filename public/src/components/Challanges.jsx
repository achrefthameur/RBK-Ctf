import React from 'react'


class Challanges extends React.Component{
    constructor(props){
        super(props)
        this.state={
            challanges : [],
            flag:'',
            challange_id:0
        }
    }
    ChallangePopUp(challange){
        this.setState({challange_id:challange.id})
        $('#TitlePopUp').html(challange.Challange_name)
        $('#challangeHint').html(challange.Hint)
        $('#challangeDifficulty').html(challange.Difficulty)
        $('#challangepoints').html(challange.points)
        $('#challangeAuthor').html(challange.Author)
        
        $("#Challalink").attr("href",challange.Challange_Link)
        $('#ModalPop').modal('show');
    }
    SubmiFlag(){
        const {challanges,flag,challange_id} = this.state
        const {user_id} = this.props
        $.ajax({
            url:'/api/solve',
            type:'POST',
            contentType:'application/json',
            data:JSON.stringify({team_id:user_id,challange_id:challange_id,Flag:flag}),
            success:(result)=>{
                    console.log(result)
            }
        })
    }

    componentDidMount(){
        $.ajax({
            url:'api/challanges',
            type:'GET',
            contentType:'application/json',
            success:(challanges)=>{
                this.setState({challanges:challanges})
            }
        })
    }

    render(){
        const {challanges} = this.state
        return(
            <div id='Challlanges-Container'>
                   <div className="Challange-Ful-Container">
                   <div className='Challange-type'>
                    <p> Network </p>
                    <hr style={{borderTop:'2px solid #CF202A ' ,width:'45%',float:'left',marginTop:'70px'}} />
                    
                    <hr className='hrAngle' />
                    <hr style={{borderTop:'2px solid #CF202A ' ,width:'45%',float:'right'}} />
                    </div>
                    <div className="Challanges-cards container">
                        <div className="row">
                            {challanges.map((challange,i)=>{
                               return (challange.type == 'Network') ?     <div className="col-sm Challange-card" onClick={()=>this.ChallangePopUp(challange)} key={i}>
                                <div className="card">
                                        <h5 className="card-header text-center Card-challange-header">{challange.Challange_name}</h5>
                                        <div className="card-body">
                                            <h5 className="card-title text-center title-challange">Author : <span>{challange.Author}</span></h5>
                                            <h5 className="card-title text-center title-challange">Difficulty : <span>{challange.Difficulty}</span></h5>
                                            <h5 className="card-title text-center title-challange">Points : <span>{challange.points}</span></h5>
                                            {(this.props.solved.includes(challange.id)) ? <h5 className='text-center' style={{color:'#27ae60'}}  ><font size="7">&#10004; </font></h5> : <h5 className='text-center' style={{color:'#e74c3c'}}  ><font size="7">&times; </font></h5> }
                                        </div>
                                </div>
                            </div>:''
 
                            })}
                        </div>
                     </div>
                   </div>
                   <div className='Challange-Ful-Container'>
                   <div className='Challange-type'>
                    <p> Forensic </p>
                    <hr style={{borderTop:'2px solid #CF202A ' ,width:'45%',float:'left',marginTop:'70px'}} />
                    
                    <hr className='hrAngle' />
                    <hr style={{borderTop:'2px solid #CF202A ' ,width:'45%',float:'right'}} />
                    </div>
                    <div className="Challanges-cards container">
                        <div className="row">
                            {challanges.map((challange,i)=>{
                               return (challange.type == 'Forensic') ?    <div className="col-sm Challange-card" onClick={()=>this.ChallangePopUp(challange)} key={i}>
                                <div className="card">
                                        <h5 className="card-header text-center Card-challange-header">{challange.Challange_name}</h5>
                                        <div className="card-body">
                                            <h5 className="card-title text-center title-challange">Author : <span>{challange.Author}</span></h5>
                                            <h5 className="card-title text-center title-challange">Difficulty : <span>{challange.Difficulty}</span></h5>
                                            <h5 className="card-title text-center title-challange">Points : <span>{challange.points}</span></h5>
                                            {(this.props.solved.includes(challange.id)) ? <h5 className='text-center' style={{color:'#27ae60'}}  ><font size="7">&#10004; </font></h5> : <h5 className='text-center' style={{color:'#e74c3c'}}  ><font size="7">&times; </font></h5> }
                                        </div>
                                </div>
                            </div>:''
 
                            })}
                        </div>
                     </div>
                   </div>
                   <div className='Challange-Ful-Container'>
                   <div className='Challange-type'>
                    <p> Web - Client </p>
                    <hr style={{borderTop:'2px solid #CF202A ' ,width:'45%',float:'left',marginTop:'70px'}} />
                    
                    <hr className='hrAngle' />
                    <hr style={{borderTop:'2px solid #CF202A ' ,width:'45%',float:'right'}} />
                    </div>
                    <div className="Challanges-cards container">
                        <div className="row">
                            {challanges.map((challange,i)=>{
                               return (challange.type == 'Web') ?    <div className="col-sm Challange-card" onClick={()=>this.ChallangePopUp(challange)} key={i} >
                                <div className="card">
                                        <h5 className="card-header text-center Card-challange-header">{challange.Challange_name}</h5>
                                        <div className="card-body">
                                            <h5 className="card-title text-center title-challange">Author : <span>{challange.Author}</span></h5>
                                            <h5 className="card-title text-center title-challange">Difficulty : <span>{challange.Difficulty}</span></h5>
                                            <h5 className="card-title text-center title-challange">Points : <span>{challange.points}</span></h5>
                                            {(this.props.solved.includes(challange.id)) ? <h5 className='text-center' style={{color:'#27ae60'}}  ><font size="7">&#10004; </font></h5> : <h5 className='text-center' style={{color:'#e74c3c'}}  ><font size="7">&times; </font></h5> }
                                        </div>
                                </div>
                            </div>:''
 
                            })}
                        </div>
                     </div>
                   </div>
                   <div id='PopUp'>

                    <div className="modal fade" id="ModalPop" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header ">
                            <h5 className="modal-title " id="TitlePopUp">Modal title</h5>
                            <button type="button" className="close CloseButton" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                                Challange Link : <a href='' id="Challalink" target='_blank' > Link </a><br />
                                Hint : <span id='challangeHint'></span><br />
                                Difficulty : <span id='challangeDifficulty'></span><br />
                                 
                                Author  : <span id='challangeAuthor'></span><br />
                                <div style={{marginLeft:'35%',fontSize:'22px',color:'white'}}><span id='challangepoints'  ></span> Points </div>
                                <input placeholder="FlAG_H3r3" id='FlagInput' onChange={(e)=>this.setState({flag:e.target.value})}/><button type="button" style={{marginLeft:'10px'}} className="btn btn-danger" onClick={()=>this.SubmiFlag()} >Submit</button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" id='modalClose' data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                    </div>
                   </div>
            </div>
        )
    }
}

export default Challanges;