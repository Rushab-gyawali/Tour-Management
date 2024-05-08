import React, { useState } from 'react'
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { IoStar } from "react-icons/io5";
import { RiCloseLine } from 'react-icons/ri';

import {useNavigate} from "react-router-dom";

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        userId: '01',//later it will be dynamic
        userEmail: 'example@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''

    })

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);
    //send data to server
    const handleClick = e => {
        e.preventDefault();
        //console.log(credentials);
        navigate('/thank-you');
    }
    return (
        <div className='booking'>
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>${price} <span>/per person</span></h3>
                <span className='tour__rating d-flex align-items-center'>
                    <i><IoStar /></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>
            {/* booking form */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder="Full Name" id='fullName' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="text" placeholder="Phone" id='phone' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-item-center gap-3'>
                        <input type="date" id='bookAt' required onChange={handleChange} />
                        <input type="number" placeholder="No. of Guest" id='guestSize' required onChange={handleChange} />
                    </FormGroup>

                </Form>
            </div>
            {/*  booing form ends */}

            {/* booking bottom */}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-tems-center gap-1'>
                            {price} <RiCloseLine /> 1 person</h5>
                        <span>${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>ServiceCharge</h5>
                        <span>$10</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span>${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
            </div>
        </div>
    )
}

export default Booking;