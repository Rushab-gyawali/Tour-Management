import React from 'react'
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const quick__links = [
  {
    path: '/home',
    display: "Home"
  },
  {
    path: '/about',
    display: "About"
  },
  {
    path: '/tours',
    display: "Tours"
  },
]
const quick__links2 = [
  {
    path: '/gallery',
    display: "Gallery"
  },
  {
    path: '/login',
    display: "Login"
  },
  {
    path: '/register',
    display: "Register"
  },
]
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Container className='footer'>
      <Row>
        <Col lg='3'>
          <div className='logo'>
            <img src={logo} alt='' />
            <p>There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected humour,
              or randomised words which don't look even slightly believable.</p>
            <div className='social__links d-flex align-items-center gap-4'>
              <span>
                <Link to='#'><FaYoutube /></Link>
              </span>
              <span>
                <Link to='#'><FaGithub /></Link>
              </span>
              <span>
                <Link to='#'><FaFacebook /></Link>
              </span>
              <span>
                <Link to='#'><FaInstagram /></Link>
              </span>
            </div>
          </div>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'> Discovery</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'> Quick Links</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'> Contacts</h5>
          <ListGroup className='footer__quick-links'>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap=3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i><CiLocationOn /></i></span>Address:
              </h6>
              <p className='mb-0'>Kathmandu, Nepal</p>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap=3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i><CiMail /></i></span>Email:
              </h6>
              <p className='mb-0'>gyawali.rushab@gmail.com</p>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap=3'>
              <h6 className='mb-0 d-flex align-items-center gap-2'>
                <span><i><CiPhone /></i></span>Phone:
              </h6>
              <p className='mb-0'> +977 9876543210</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='12' className='text-center'>
          <p className="copyright">Copyright {year}. All right are reserved to TravelWorld</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;