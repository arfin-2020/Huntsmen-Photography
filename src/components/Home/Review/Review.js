import React, { useEffect, useState } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import { Spinner } from 'react-bootstrap';
const Review = () => {
    const [reviews,setReviewData] = useState([])
    useEffect(() =>{
        fetch('https://aqueous-temple-88060.herokuapp.com/reviews')
        .then(res =>res.json())
        .then(data =>setReviewData(data))
    },[])
    return (
        <div className = 'd-flex justify-content-center'>
            <div className = 'row w-75'>
                <h2 style = {{textAlign:"center", color:"#ff8882"}}>Our Reviews</h2>
                {
                    reviews.length === 0 && <p style = {{textAlign:"center"}}> <Spinner animation="border" role="status">
                    <span className="sr-only"> Loading...</span>
                    </Spinner></p>
                }
                    {
                        reviews.map(review =><ReviewDetails key ={review.id} review={review} />)
                    }
            </div>
        </div>
    );
};

export default Review;