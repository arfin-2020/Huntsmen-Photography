import React from 'react';

const OrderList = ({orders}) => { 
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Email</th>
            <th className="text-secondary" scope="col">Address</th>
            <th className="text-secondary" scope="col">Category Name</th>
            <th className="text-secondary" scope="col">Phone</th>
            </tr>
        </thead>
        <tbody>
                {
                    orders.map((order, index) => 
                    
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.address}</td>
                        <td>{order.category}</td>
                        <td>{order.phone}</td>
                        
                    </tr>
                    )
                }
            </tbody>
    </table>
    );
};

export default OrderList;