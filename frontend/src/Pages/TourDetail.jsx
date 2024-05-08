import React, { useState, useRef } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import { IoStar } from 'react-icons/io5';
import calculatingAvgRating from '../utils/avgRating';
import { RiMapPinUserFill, RiMapPin2Line, RiMoneyDollarCircleLine, RiGroupLine, RiMapPinTimeLine } from "react-icons/ri";
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';
const TourDetail = () => {

  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [] = useState(null);
  const [tourRating, settourRating] = useState(null);
  //for now we are using static data 
  //api will be called later;
  const tour = tourData.find(tour => tour.id === id);

  //destructure properties from tour object
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;

  const { totalRating, avgRating } = calculatingAvgRating(reviews)

  //format date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  //submit request to server
  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;
    alert(`${reviewText}, ${tourRating} this feature is still not available`);
    {/* later api will be called*/ }
  }
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className='tour__content'>
                <img src={photo} alt='' />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className='d-flex align-items-center gap-5'>
                    <span className='tour__rating d-flex align-items-center gap-1'>
                      <i style={{ color: "var(--secondary-color)" }}><IoStar /></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? 'Not Rated' : (<span>({reviews?.length})</span>)}
                    </span>
                    <span>
                      <i><RiMapPinUserFill /></i>{address}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span><i><RiMapPin2Line /> {city}</i></span>
                    <span><i><RiMoneyDollarCircleLine /> ${price} per person</i></span>
                    <span><i><RiMapPinTimeLine /> {distance} k/m</i></span>
                    <span><i><RiGroupLine /> {maxGroupSize} people</i></span>
                  </div>
                  <h5>Descripition</h5>
                  <p>{desc}</p>
                </div>

                {/* tour review section */}
                <div className='tour__reviews mt-4'>
                  <h4>Reviews ({reviews?.length} review)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                      <span onClick={() => settourRating(1)}>1<IoStar /></span>
                      <span onClick={() => settourRating(2)}>2<IoStar /></span>
                      <span onClick={() => settourRating(3)}>3<IoStar /></span>
                      <span onClick={() => settourRating(4)}>4<IoStar /></span>
                      <span onClick={() => settourRating(5)}>5<IoStar /></span>
                    </div>
                    <div className="review__input">
                      <input type='text' ref={reviewMsgRef} placeholder='share your thoughts' required />
                      <button className='btn primary__btn text-white' type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {
                      reviews?.map(review => (
                        <div className="review__item">
                          <img src={avatar} alt='' />

                          <div className="w-100">
                            <div className='d-flex align-items-center justify-content-between'>
                              <div>
                                <h5>muhib</h5>
                                <p>{new Date('01-18-2023').toLocaleDateString("en-US", options)}</p>
                              </div>
                              <span className='d-flex align-item-center'>
                                5<i><IoStar /></i>
                              </span>
                            </div>

                            <h6>Amazing tour</h6>
                          </div>
                        </div>
                      ))
                    }
                  </ListGroup>
                </div>

                {/* tour review section end*/}
              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />

            </Col>
          </Row >
        </Container>
      </section>
      <Newsletter/>
    </>
  )
}

export default TourDetail;