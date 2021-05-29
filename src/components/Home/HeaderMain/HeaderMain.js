import React from 'react';
import topImage from '../../../images/top-image1.jpg'
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <div style = {{height:"800px"}} className="cotainer-fluid row d-flex align-items-center margin"> 
            <div className="col-md-4 offset-md-1">
                <p>HELLO THERE!</p>
                <h2>I'm Caroline.</h2>
                <p style = {{textAlign:'justify'}}>A wedding, pre-wedding and fashion photographer based in central Europe.
                Mauris porttitor magna vel ante luctus convallis. Nunc at tellus erat. Donec et magni lectus. Aliquam egestas vel arcu id maximus. Orci varius natoque penatibus et mate dis parturient montes, nascetur ridiculus miss.
                Quisque efficitur nisi nec tellus fringilla posuere. Sed ut scelerisque tortor. Mauris maximus sollicitudin purus, sed fringilla lorem auctor eget. 
                Interdum et malesuada duruthemes the miss a comp dresire ifames.</p>
                <button className="fency-btn">Explore</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid image" src={topImage} alt=""/>
            </div>
        </div>
    );
};

export default HeaderMain;