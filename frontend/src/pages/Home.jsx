import React from 'react'
import '../Style/home.css'

import { Container, Row, Col } from "reactstrap";
import heroimg from "../assets/images/hero-img01.jpg";
import heroimg02 from "../assets/images/hero-img02.jpg";
import herovideo from "../assets/images/hero-video.mp4";
import worldImg from '../assets/images/world.png'
import Subtitle from "./../Shared/Subtitle"

import SearchBar from '../Shared/SearchBar';


const Home = () => {
  return <>

    {/* ======hero section start======= */}

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle Subtitle={'Know before you Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating <spam className="highlight">memories</spam></h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut itaque distinctio, officia cumque quasi nemo quam, ex eligendi cupiditate repellat esse rerum. Quas harum rerum aspernatur explicabo beatae voluptates repellendus?</p>
            </div>
          </Col>
          <Col lg='2'>
             <div className="hero__img-box">
            <img src={heroimg} alt="" />
          </div>
          </Col>
          <Col lg='2'>
             <div className="hero__img-box mt-4">
            <video src={herovideo} alt="" controls/>
          </div>
          </Col>
          <Col lg='2'>
             <div className="hero__img-box mt-5">
            <img src={heroimg02} alt="" />
          </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/* ======hero section end======= */}
    <section>
      <Row>
        <Col lg='3'>
          <h5 className='service__subtitle'>what we serve</h5>
          <h2 className='service__title'>we offer our best services</h2>
        </Col>
      </Row>
    </section>

  </>
}

export default Home