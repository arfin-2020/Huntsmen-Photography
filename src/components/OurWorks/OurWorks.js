import React from 'react';
import wedding from '../../images/wedding.jpg'
import glamour from '../../images/glamour.jpg'
import Modelling from '../../images/Modelling.jpg'
import WorkesDetails from './WorkesDetails';
const OurWorks = () => {
    const works = [
        {
                name:"Wedding",
                img: wedding
        },
        {
                name:"Glamour",
                img: glamour
        },
        {
                name:"Wedding",
                img: Modelling
        },
    ];
    return (
        <div className = 'd-flex justify-content-center'>
            <div className = 'row w-75'>
                <h2 style = {{textAlign:"center", color:"#ff8882"}}>Our Trending Works</h2>
                
                    {
                        works.map(work =><WorkesDetails work={work} />)
                    }
            </div>
        </div>
    );
};

export default OurWorks;