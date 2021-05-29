
import { useEffect, useState } from 'react';
import OrderList from '../OrderList/OrderList';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-temple-88060.herokuapp.com/selectedorders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div className = 'container-fluid row'>
                <Sidebar/>
            <div className="col-md-10 p-4 pr-5 w-75" style={{ position: "absolute", right: 0, backgroundColor: "#fbe0c4" }}>
                <h1>Your  Have Total {orders.length} Orders</h1>   
               <OrderList orders = {orders}/>
            </div>
        </div>
    );
};

export default Dashboard;