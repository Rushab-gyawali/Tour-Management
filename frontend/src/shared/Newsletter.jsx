import React from 'react'
import './newsletter.css';
import { Col, Container,Row } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe not to get useful traveling information.</h2>
                            <div className='newsletter__input'>
                                <input type='email' placeholder='Enter your email' />
                                <button className='btn newsletter__btn'>Subscribe</button>
                            </div>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
                            </p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='newsletter__img'>
                            <img src={maleTourist} alt='' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter;