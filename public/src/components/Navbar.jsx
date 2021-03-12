import React from 'react'


class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {ChangeView,logged} = this.props
        console.log(logged)
        if (logged){
            return(
                <nav className="navbar navbar-expand-lg Nav-Container">
                    <a className="navbar-brand" href="#"><img height='50px'  src="https://static.wixstatic.com/media/dd4762_b6c3c3bfa0e2496c9f10a1b7ac3e1395~mv2.png/v1/fill/w_156,h_80,al_c,usm_0.33_1.00_0.00/logo-RBK-blanc.png" /></a>
                    <div className="navbar-rightCh" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link NavBar-item"  href="#" onClick={()=>ChangeView('ScoarBoard')}>ScoreBoard <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link NavBar-item" href="#" onClick={()=>ChangeView('Challanges')} >Challanges</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link NavBar-item" href="#" onClick={()=>ChangeView('Profile')} >Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link NavBar-item" href="#" onClick={()=>ChangeView('Settings')} >Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link NavBar-item" href="#" onClick={()=>ChangeView('logout')} >Logout</a>
                        </li>
                        </ul>
    
                    </div>
                </nav>
            )
        }else{
            return(
                <nav className="navbar navbar-expand-lg Nav-Container">
                    <a className="navbar-brand" href="#"><img height='50px'  src="https://static.wixstatic.com/media/dd4762_b6c3c3bfa0e2496c9f10a1b7ac3e1395~mv2.png/v1/fill/w_156,h_80,al_c,usm_0.33_1.00_0.00/logo-RBK-blanc.png" /></a>
                    <div className="navbar-rightCh" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link NavBar-item"  href="#" onClick={()=>ChangeView('ScoarBoard')}>ScoreBoard <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link NavBar-item" href="#" onClick={()=>ChangeView('SignIn')} >Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link NavBar-item" href="#" onClick={()=>ChangeView('SignUp')} >Register</a>
                        </li>
                        </ul>
    
                    </div>
                </nav>
            )
        }

    }
}

export default Navbar;