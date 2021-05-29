import React from 'react';
import topImage1 from '../../../images/top-image.jpg'
const BestQuality = () => {
    return (
        <div style = {{height:"500px"}} className="cotainer-fluid row d-flex align-items-center margin"> 
        <div className="col-md-6 offset-md-1">
        <img className="img-fluid image" src={topImage1} alt=""/>
        </div>
        <div className="col-md-4">
            <h2 style={{color:'#810000'}}>We Believe Best Quality & We Care</h2>
            <p style = {{textAlign:'justify'}}>A wedding, pre-wedding and fashion photographer based in central Europe.
            Mauris porttitor magna vel ante luctus convallis. Nunc at tellus erat. Donec et magni lectus. Aliquam egestas vel arcu id maximus. Orci varius natoque penatibus et mate dis parturient montes, nascetur ridiculus miss.
            Quisque efficitur nisi nec tellus fringilla posuere. Sed ut scelerisque tortor. Mauris maximus sollicitudin purus, sed fringilla lorem auctor eget. 
            Interdum et malesuada duruthemes the miss a comp dresire ifames.</p>
            <button className="fency-btn">Explore</button>
        </div>
    </div>
    );
};

export default BestQuality;