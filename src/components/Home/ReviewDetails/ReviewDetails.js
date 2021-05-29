import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './ReviewDetails.css'

const ReviewDetails = ({review}) => {
    return (
        <div className = 'col-md-4 contant col-md-4 text-center mb-3 p-5'>
            <div className="main-container d-flex">
                <div className = 'loadedImg'>
                    {
                       review.image ? <img src={`data:image/jpeg;base64,${review.image.img}`} alt="" height="70px"/>
                      : <img className="image" src={`https://aqueous-temple-88060.herokuapp.com/${review.img}`} alt="" height="70px"/>
                    }
                </div>
                <div>
                    <h4>{review.name}</h4>
                    <h6>{review.position}</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptates.</p>
                    <div className ="star-color">
                    <FontAwesomeIcon  icon={faStar} />
                    <FontAwesomeIcon  icon={faStar} />
                    <FontAwesomeIcon  icon={faStar} />
                    <FontAwesomeIcon  icon={faStar} />
                    <FontAwesomeIcon  icon={faStar} />
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;