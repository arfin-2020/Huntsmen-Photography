import React from 'react';

const WorkesDetails = ({work}) => {
    return (
        <div className="contant col-md-4 text-center mb-3 p-5">
            <div className = 'main-container'>
                    <img src={work.img} alt=""  height="300px"/>
                    <p>{work.name}</p>
            </div>
        </div>
    );
};

export default WorkesDetails;