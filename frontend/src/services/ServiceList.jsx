import React from 'react'
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
const ServiceList = () => {

    const serviceData = [
        {
            imgUrl: weatherImg,
            title: "Calculate Weather",
            desc: "test test test"
        },
        {
            imgUrl: guideImg,
            title: "Best tour guide",
            desc: "test test test"
        },
        {
            imgUrl: customizationImg,
            title: "Customization",
            desc: "test test test"
        },
    ]
    return (
        <>
            {serviceData.map((item, index) => (
                <Col lg='3' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    )
}

export default ServiceList;