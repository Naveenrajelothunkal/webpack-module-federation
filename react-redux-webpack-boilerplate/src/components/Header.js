import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import '../css/styles.css'
const Header = ({appBool, selectApp}) => {
    return (
           <header className="header">
           <h1 className="logo"><a href="#">Dashboard</a></h1>
                <ul className="main-nav">
                    <li><a className={appBool?'':'active'} onClick={() => selectApp(false)}>App1</a></li>
                    <li><a className={appBool?'active': ''} onClick={() => selectApp(true)}>App2</a></li>
                    <li><Link to="/app1" onClick={() => selectApp(false)}>Logout</Link></li>
                </ul>
            </header> 
    )
}
Header.propTypes = {
    // userLogin: PropTypes.string.isRequired
  }
export default Header;