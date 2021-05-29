import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shipment.css'
const Shipment = () => {
    const [info,setInfo] = useState({})
    
   
    const handleBlur = (e) =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('address', info.address)
        formData.append('category', info.category)
        formData.append('phone', info.phone)
      
        fetch('https://aqueous-temple-88060.herokuapp.com/selectedorder', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }

    return (
        <div className = "form-contaniner">
            <form onSubmit={handleSubmit}> 
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input onBlur={handleBlur} type="text" class="form-control" name = 'name'/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input onBlur={handleBlur}  type="text" class="form-control" name = "email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Address</label>
                    <input onBlur={handleBlur}  type="text" class="form-control" name = "address"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Category</label>
                    <input onBlur={handleBlur}  type="text" class="form-control" name = "category"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Phone</label>
                    <input onBlur={handleBlur}  type="text" class="form-control" name = "phone"/>
                </div>
                    <button type="submit" class="btn btn-primary">Submit</button><br/>
                    <h4>Please Click this payment button</h4>
                <button style={{height:"50px",width:"150",backgroundColor:"orange",border:"none"}}> 
                <Link style={{ textDecoration: 'none',color:'white' }} to="/payment">Payment</Link> </button>
        </form> 
        </div>
    
    );
};

export default Shipment;