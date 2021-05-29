import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { Spinner } from 'react-bootstrap';
const Service = () => {
    const [services,setServiceData] = useState([])
   useEffect(()=>{
        fetch('https://aqueous-temple-88060.herokuapp.com/orders')
        .then(res =>res.json())
        .then(data =>setServiceData(data))
   },[])
    return (
        <section className="services-container">
        <div className ='text-center mt-5'>
            <h5 style={{color:'#1CC7C1'}}>OUR PACKAGES </h5>
            <h1 style = {{color:'#3A4256'}}>Packages We Provide</h1>
            
        </div>
        <div className = "d-flex justify-content-center">
            <div className = 'w-75 row pt-5 m-5'>
            {
                services.length === 0 && <p style = {{textAlign:"center"}}> <Spinner animation="border" role="status">
                    <span className="sr-only"> Loading...</span>
                    </Spinner></p>
                }
                {
                    services.map(service=><ServiceDetails key={service._id} service={service}></ServiceDetails>)
                }
            </div>
        </div>
    </section>
    );
};

export default Service;