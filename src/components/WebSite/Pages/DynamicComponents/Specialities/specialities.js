import React, { Component } from "react";
import Slider from "react-slick";
import './specialities.css'
import { Link } from "react-router-dom";

import sFour from "../../../../assets/img/clinic/dentists-treat-patients-teeth_1150-19646.png";
import sFive from "../../../../assets/img/specialities/specialities-05.png";
import sSix from "../../../../assets/img/clinic/woman-patient-medical-office-doctor-medical-mask-lor-checks-woman-ears_1157-45543 (1).png";
import sSeven from "../../../../assets/img/clinic/happy-doctor-holding-clipboard-with-patients_1098-2176 (1).png";
import sTen from "../../../../assets/img/clinic/little-girl-checking-up-her-sight-ophthalmology-center_1303-27493 (1).png";
import sThirteen from "../../../../assets/img/specialities/specialities-13.png";
import sFouteen from "../../../../assets/img/clinic/young-male-psysician-with-patient-hospital_1303-17884.png";
import { Container } from "react-bootstrap";
import leftarrow from '../../../../assets/img/leftarrow.png'
import rightarrow from '../../../../assets/img/rightarrow.png'
export default class Specialitites extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 0,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
    };
    return (
      <Container className='speciality'>

        <div className="section-header text-center titleDiv">
          <div>Clinics and Specialities</div>

          <div style={{ marginLeft: "72rem" }}>
                        <button className="leftbtn"><img src={rightarrow} style={{height:25}}/></button>
                        <button className="leftbtn"><img src={leftarrow} style={{height:25}}/></button>
                    </div>
          <div className="underLineDiv"></div>
        </div>
        <Slider {...settings}>

          {/* <article className='s-items'>
            <aside className="speicality-item">
              <Link to='/doctors'>
                <div id='img-spec'>
                  <img src={sFouteen} alt="Speciality" />
                </div>
              </Link>
              <p>General Physician</p>
            </aside>
          </article> */}
          <div style={{ marginBottom: "14px" }}>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div >

                <img src={sFouteen} alt="Speciality" />


              </div>
              <div style={{ marginTop: "18px" }}>
                General Physician
              </div>
            </div>

            <div style={{ height: "150px", background: "#FCFCFC", zIndex: "-1", marginTop: "-82px" }}>
            </div>
          </div>

          {/* <article className='s-items'>
            <aside className="speicality-item">
              <Link to='/doctors'>
                <div id='img-spec'>
                  <img src={sSeven} alt="Speciality" />
                </div>
              </Link>
              <p>Paediatrician</p>
            </aside>
          </article> */}

          <div style={{ marginBottom: "14px" }}>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div >

                <img src={sSeven} alt="Speciality" />


              </div>
              <div style={{ marginTop: "18px" }}>
                Pediatrician
              </div>
            </div>

            <div style={{ height: "150px", background: "#FCFCFC", zIndex: "-1", marginTop: "-82px" }}>
            </div>
          </div>

          {/* <article className='s-items'>
            <aside className="speicality-item">
              <Link to='/doctors'>
                <div id='img-spec'>
                  <img src={sFive} alt="Speciality" />
                </div>
              </Link>
              <p>Dentist</p>
            </aside>
          </article> */}

          <div style={{ marginBottom: "14px" }}>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div >

                <img src={sFour} alt="Speciality" />


              </div>
              <div style={{ marginTop: "18px" }}>
                Dentist
              </div>
            </div>

            <div style={{ height: "150px", background: "#FCFCFC", zIndex: "-1", marginTop: "-82px" }}>
            </div>
          </div>

          {/* <article className='s-items'>
            <aside className="speicality-item">
              <Link to='/doctors'>
                <div id='img-spec'>
                  <img src={sFour} alt="Speciality" />
                </div>
              </Link>
              <p>Orthopaedics</p>
            </aside>
          </article> */}
          <div style={{ marginBottom: "14px" }}>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div >

                <img src={sSix} alt="Speciality" />


              </div>
              <div style={{ marginTop: "18px" }}>
                Orthopaedics
              </div>
            </div>

            <div style={{ height: "150px", background: "#FCFCFC", zIndex: "-1", marginTop: "-82px" }}>
            </div>
          </div>

          {/* <article className='s-items'>
            <aside className="speicality-item">
              <Link to='/doctors'>
                <div id='img-spec'>
                  <img src={sSix} alt="Speciality" />
                </div>
              </Link>
              <p>Ophthalmology</p>
            </aside>
          </article> */}
          <div style={{ marginBottom: "14px" }}>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div >

                <img src={sTen} alt="Speciality" />


              </div>
              <div style={{ marginTop: "18px" }}>
                Ophthalmology
              </div>
            </div>

            <div style={{ height: "150px", background: "#FCFCFC", zIndex: "-1", marginTop: "-82px" }}>
            </div>
          </div>

          {/* <article className='s-items'>
            <aside className="speicality-item">
              <Link to='/doctors'>
                <div id='img-spec'>
                  <img src={sTen} alt="Speciality" />
                </div>
              </Link>
              <p>ENT Doctor</p>
            </aside>
          </article> */}
          <div style={{ marginBottom: "14px" }}>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div >

                <img src={sSix} alt="Speciality" />


              </div>
              <div style={{ marginTop: "18px" }}>
                ENT Doctor
              </div>
            </div>

            <div style={{ height: "150px", background: "#FCFCFC", zIndex: "-1", marginTop: "-82px" }}>
            </div>
          </div>

          {/* <div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div >

                <img src="/react-webpage/static/media/young-male-psysician-with-patient-hospital_1303-17884.555ccd28.png" alt="Speciality" />


              </div>
              <div>
                General Psysician
              </div>
            </div>

            <div style={{ height: "150px;", background: "#FCFCFC", zIndex: "-1", marginTop: "-82px" }}>
            </div>
          </div> */}


        </Slider>

        <Link to='/s-list'>
          <div id='view-btn'>
            <button className="btn view-btn">View More</button>
          </div>

        </Link>
      </Container>
    );
  }
}


