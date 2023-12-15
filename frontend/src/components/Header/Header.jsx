import React from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import "./header.css";

const nav_links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* ======logo===== */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            {/* ======logo end===== */}

            {/* ======menu start===== */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav_links.map((item, index) => (
                    <li className="nav_item">
                      <NavLink to={item.path} className={navClass => navClass.isActive ? "active_link" : ""}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* ======menu end===== */}
            <div className="nav_right d-flex align-items-center gap-4 ">
              <div className="nav_btns d-flex align-items-center gap-4">
                <button className='btn secondary__btn'><Link to='/login'>Login</Link></button>
                <button className='btn primary__btn'><Link to='/register'>Register</Link></button>
              </div>

              <span className="mobile_menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header