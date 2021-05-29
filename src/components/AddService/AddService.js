import React from 'react';
import  { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
const AddService = () => {
    const [info,setInfo] = useState({})
    const [file, setFile] = useState(null)
    
    const handleBlur = (e) =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) =>{
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('category', info.category)
        formData.append('price', info.price)
      
        fetch('https://aqueous-temple-88060.herokuapp.com/addorder', {
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
        <div className = 'container-fluid row'>
                    <Sidebar/>
            <div className="col-md-10 p-4 pr-5 w-75" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5 className = "text-brand"> Add a Service</h5>
                    <form onSubmit={handleSubmit}> 
                            <div class="form-group">
                                <label for="exampleInputEmail1">Category</label>
                                <input onBlur={handleBlur} type="text" class="form-control" name = 'category' placeholder="Enter Category"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Price</label>
                                <input onBlur={handleBlur}  type="text" class="form-control" name = "price" placeholder="Enter Price"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Upload image</label>
                                <input onChange = {handleFileChange} type="file" class="form-control" placeholder="Upload" id="exampleCheck1"/>
                            </div>
                                 <button type="submit" class="btn btn-primary">Submit</button>
                    </form>     
                </div>
        </div>
    );
};

export default AddService;