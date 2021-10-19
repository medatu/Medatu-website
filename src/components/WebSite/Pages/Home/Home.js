import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Specialitites from '../DynamicComponents/Specialities/specialities';
import Search from '../DynamicComponents/SearchBar/app/Search';
import FeedBack from './feedback';
import Blog from '../Blog/Blog';
import Three from '../DynamicComponents/Three/Three';
import Appointment from '../Appointments/Appointment/Appointment';
import Space from '../DynamicComponents/Space/Space';
import DocHome from '../Doctors/Doctors/DocHome';
import './FormDesign.css'
import banner from '../../../assets/img/banner-img.png';
import { Card, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
const Home = () => {

    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <>
            <main className="main-wrapper">
                <Space />
                <section className="banner-home">
                    <article className="banner-design">
                        <div className="banner-header">
                            <h1>Book a Medical Appointment.</h1>
                            <p>It’s Simple and Free!</p>
                            {/* <p>Now you can make anappointment with your Doctor</p>
                <p>anywhere and anything via online booking whick make it easir</p>
                <p>More &gt; </p> */}
                            <img src={banner} alt="Logo" className="banner" />
                        </div>
                        <div className="banner-search">
                            <Search />
                        </div>
                    </article>
                </section>
                <Specialitites />
                <Three />
                <Appointment />

                <div className="section-header text-center titleDiv">
                    <div>Top Health Care Professionals to Solve Your Health Issues.</div>
                    <div className="underLineDiv"></div>
                </div>

                <DocHome />
                <Container>
                    <article id='f-box' className='text-center' style={{ display: "none" }}>
                        <h3 style={{ paddingTop: '2rem' }}>What People Say about Us</h3>

                        <hr className="underline" />
                        <hr style={{ align: "center", width: "50%" }} />

                        {/* <hr style={{width:"50%",size:10,align:"center"}}/> */}
                        <FeedBack />
                    </article>
                </Container>


                <div className="section-header text-center">
                    <p className="section-p text-center">Top Health Care Professionals to Solve Your Health Issues.</p>
                </div>

                <DocHome />

                <Container>


                </Container>
                <article id='f-box' className='text-center'>
                    <h3 style={{ paddingTop: '2rem' }}>Find Doctors and dentist by city</h3>

                </article>
                <div>
                    <Row>
                        <Col className="doctorscol">Bangalore, Karnataka
                            <p className="arrowicon"> &darr;</p>
                        </Col>
                        <Col className="doctorscol">Bangalore, Karnataka
                            <p className="arrowicon"> &darr;</p>
                        </Col>
                        <Col className="doctorscol">Bangalore, Karnataka
                            <p className="arrowicon"> &darr;</p>
                        </Col>
                        <Col className="doctorscol">Bangalore, Karnataka
                            <p className="arrowicon"> &darr;</p>
                        </Col>
                        <Col className="doctorscol">Bangalore, Karnataka
                            <p className="arrowicon"> &darr;</p>
                        </Col>
                        <Col className="doctorscol">Bangalore, Karnataka
                            <p className="arrowicon"> &darr;</p>
                        </Col>
                    </Row>
                </div>



                <Container>
                    <article id='f-box' className='text-center'>
                        <h3 style={{ paddingTop: '2rem' }}>What People Say about Us</h3>

                        {/* <hr className="underline"/>
    <hr style={{align:"center",width:"50%"}} />
   
    <FeedBack/> */}
                    </article>
                    <div style={{ marginLeft: "53rem" }}>
                        <button className="leftbtn">&lt;</button>
                        <button className="leftbtn">&gt;</button>
                    </div>
                    <div className="row">
                        <Card style={{ width: '18rem', margin: 20 }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <p style={{ color: "blue" }}>More</p>
                                <hr />
                                <div>
                                    <div className="rating" style={{ marginLeft: "130px" }}>
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt} />&nbsp;&nbsp;
                                        <span className="d-inline-block average-rating">3.5</span>
                                    </div>
                                    <p style={{ marginTop: -37 }}>Roman Rock</p>

                                    <p>CEO.Google</p>
                                </div>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', margin: 20 }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <p style={{ color: "blue" }}>More</p>
                                <hr />
                                <div>
                                    <div className="rating" style={{ marginLeft: "130px" }}>
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt} />&nbsp;&nbsp;
                                        <span className="d-inline-block average-rating">3.5</span>
                                    </div>
                                    <p style={{ marginTop: -37 }}>Roman Rock</p>

                                    <p>CEO.Google</p>
                                </div>

                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem', margin: 20 }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <p style={{ color: "blue" }}>More</p>
                                <hr />
                                <div>
                                    <div className="rating" style={{ marginLeft: "130px" }}>
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStar} />
                                        <FontAwesomeIcon id="pro-rate" icon={faStarHalfAlt} />&nbsp;&nbsp;
                                        <span className="d-inline-block average-rating">3.5</span>
                                    </div>
                                    <p style={{ marginTop: -37 }}>Roman Rock</p>

                                    <p>CEO.Google</p>
                                </div>

                            </Card.Body>
                        </Card>

                        <p style={{ marginLeft: "55rem", color: "blue" }}>View All -&gt; </p>
                    </div>


                </Container>
                <Blog />
            </main>
        </>
    );
}

export default Home;