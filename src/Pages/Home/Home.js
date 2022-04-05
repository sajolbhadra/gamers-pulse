import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import battlefiend from '../../image/2042.jpg'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {

    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('userReview.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])



    return (
        <div>

            <Row className='d-flex align-items-center justify-content-center pt-5 mt-5 gap-5 p-4 mx-auto'>
                <Col className='p-5' >
                    <h1 className='font-weight-bold text-uppercase color-warning text-primary'>BattleField</h1>
                    <h1>2042</h1>
                    <p>Battlefield™ 2042 marks the return to the iconic all-out warfare of the franchise. Squad up and bring a cutting-edge arsenal into massive-scale battlegrounds, set in a near-future world transformed by disorder. Battlefield™ 2042 marks the return to the iconic all-out warfare of the franchise. Squad up and bring a cutting-edge arsenal into massive-scale battlegrounds, set in a near-future world transformed by disorder.</p>

                    <Link to="/dashboard"><button className='btn btn-primary px-5 py-2'>More</button></Link>
                </Col>

                <Col className=''>
                    <img className='rounded-circle' height={"500px"} src={battlefiend} />
                </Col>
            </Row>



            <div className='review-container mx-auto'>
                {review.map(review => <Review
                    key="_id"
                    review={review}
                ></Review>)}
            </div>
            <div className='d-flex justify-content-center '>
                <Link to="/dashboard"><button className=' mt-5 mb-5 btn btn-primary px-5 py-2'>More</button></Link>
            </div>




        </div>
    );
};

export default Home;