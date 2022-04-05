import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
   const [review, setReview] = useReviews();
    return (
        <div>
            <h1 className='text-center'>Review</h1>
            <div className='review-container  '>
                {review.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)}
            </div>
        </div>
    );
};

export default Reviews;