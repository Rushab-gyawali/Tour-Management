import React, { useRef, useEffect } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { HiMenu } from "react-icons/hi";
import "./header.css";

const nav__link = [
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
const Header = () => {

  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) 
      {
        headerRef.current.classList.add('sticky__header');
      }
      else {
        headerRef.current.classList.remove('sticky__header');
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc();
    return window.removeEventListener("scroll", stickyHeaderFunc);
  })
  return (
    <Container>
      <Row>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          {/* logo */}
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          {/* logo end */}


          {/* menu starts */}
          <div className="navigation">
            <ul className='menu d-flex align-items-center gap-5'>
              {nav__link.map((item, index) => (
                <li className='nav__item' key={index}>
                  <NavLink to={item.path} className={navclass => navclass.isActive ? 'active__link' : ''}>{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* menu ends */}

          <div className='nav__right d-flex align-items-center gap-4'>
            <div className="nav__btns d-flex align-items-center gap-4">
              <Button className='btn secondary__btn'>
                <Link to='/login'>Login</Link>
              </Button>
              <Button className='btn secondary__btn'>
                <Link to='/register'>Register</Link>
              </Button>
            </div>
            <span className="mobile__menu">
              <HiMenu />
            </span>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Header