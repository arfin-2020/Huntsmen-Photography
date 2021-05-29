import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faSignOutAlt,  faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {  faCalendarPlus, faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css'
import { UserContext } from '../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin,setIsAdmin] = useState(false)
    useEffect(() =>{
        fetch('https://aqueous-temple-88060.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email: loggedInUser.email })
        })
        .then(res =>res.json())
        .then(data =>setIsAdmin(data))
    },[])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link style={{ textDecoration: 'none',color:'white' }} to="/order" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Order</span> 
                    </Link>
                </li>
               <li>
                    <Link style={{ textDecoration: 'none',color:'white' }} to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none',color:'white' }} to="/review" className="text-white" >
                        <FontAwesomeIcon icon={faCalendarPlus} /><span>Add Review</span>
                    </Link>
                 </li>
                 <li>
                    <Link style={{ textDecoration: 'none',color:'white' }} to="/payment" className="text-white" >
                        <FontAwesomeIcon icon={faMoneyBillWave} /><span>Payment</span>
                    </Link>
                </li>
            </ul> 
            <div>
                <Link  to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;