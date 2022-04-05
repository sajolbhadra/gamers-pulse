import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, rating, img, review } = props.review
    return (
        <div className='review'>
             <img src={img} alt="" />
            <div className='review-info'>
                <h3>{name}</h3>
                <p>Rating: {rating}</p>
                <p>{review}</p>
            </div> 
        </div>
    );
};

export default Review;