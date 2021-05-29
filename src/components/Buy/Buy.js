import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Table } from 'react-bootstrap';
import Shipment from '../Shipment/Shipment';

const Buy = () => {
    const {id} = useParams();
    const [packages,setPackages] = useState({});
    useEffect(() => {
        fetch('https://aqueous-temple-88060.herokuapp.com/order/' + id)
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])
    return (
        <div className = 'row'>
            <div className="col-md-6">
                <Shipment/>
            </div>
            <div className="col-md-6">
                <div style={{textAlign: 'center'}}>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Serial No</th>
                    <th>Categories Name</th>
                    <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{packages.category}</td>
                    <td> ${packages.price}</td>
                    </tr>  
                </tbody>
            </Table> 
            </div>
            </div>
        </div>
    );
};

export default Buy;