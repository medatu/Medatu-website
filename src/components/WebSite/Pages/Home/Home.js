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


                <Blog />
            </main>
        </>
    );
}

export default Home;