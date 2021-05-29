import React from 'react';
import { useHistory } from 'react-router';
import './ServiceDetails.css'
const ServiceDetails = ({service}) => {
       
    const history = useHistory();
    const handleBook = (id) => {
        history.push(`/book/${id}`);
    }
    return (
        <div className = "contant col-md-4 text-center mb-3 p-5">
                <div className = 'main-container'>
                {
                        service.image1 ? <img  src={`data:image/jpeg;base64,${service.image1.img}`} alt="" height="300px" />
                        :
                        <img src={`https://aqueous-temple-88060.herokuapp.com/${service.image}`} alt="" height="300px" width="300px"/> 
                }
                <h5 className="m-3">{service.category}</h5>
                <p style={{fontSize:"25px"}} className="card-text text-secondary">${service.price}</p>
                <button onClick={() => handleBook(service._id)} className="fency-btn">Book Now</button>
                </div>
        </div>
                );
};

export default ServiceDetails;