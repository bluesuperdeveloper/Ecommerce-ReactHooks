import React,{Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';


const isActive = (history, path) => {
    if(history.location.pathname === path){
        return {color: '#ff9900'}
    }
    else{
        return {color:'#ffffff'}
    }
}
const Menu = ({history}) => {
    return (
        <div>
            <ul className="nav nav-tabs bg-primary">
                <li className="nav-items">
                    <Link className='nav-link' to='/' style={isActive(history, '/')}>Home</Link>
                </li>

                <li className="nav-items">
                    <Link className='nav-link' to='/dashboard' style={isActive(history, '/dashboard')}>Dashboard</Link>
                </li>


                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-items">
                             <Link className='nav-link' to='/signin' style={isActive(history, '/signin')}>Signin</Link>
                         </li>
                        <li className="nav-items">
                            <Link className='nav-link' to='/signup' style={isActive(history, '/signup')}>Signup</Link>
                        </li>
                    </Fragment>
                )}

                {isAuthenticated() && (
                    <li className="nav-items">
                        <span className='nav-link' 
                                style={{cursor: 'pointer', 
                                color: '#ffffff'}}
                                onClick={() => signout(()=>{
                                    history.push('/');
                                })}>Signout</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default withRouter(Menu);
