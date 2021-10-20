import React,{useEffect} from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SpecialityList.css'
import { SpecialityDataTwo } from './Data/SpecialityDataTwo';
import search from "../../../../../assets/img/search.png"
const checker = [
  {
    id:1,
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    id:2,
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    id:3,
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    id:4,
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    id:5,
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    id:6,
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    id:7,
    text: `lorem ipsum loremkjhi iuhiuhi`
  },
  {
    id:8,
    text: `lorem ipsum loremkjhi iuhiuhi`
  }
]

const SpecialityList = () => {
  useEffect(() => {
    window.scroll(0,0)
    },)
  return (
    
		<div className="main-wrapper">

    <Breadcrumb style={{paddingTop: '100px'}}/>
    
    <div className="content">
      <div className="container-fluid">

        <div className="row sidebar" style={{width:"88rem"}}>
          <div className="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">
            
            
          </div>
          
          <div className="col-md-7 col-lg-9 col-xl-9">

            <div className="row align-items-center pb-3">	
              <div className="col-md-4 col-12 d-md-block d-none custom-short-by">
               

{/* search location */}

<h1>Search</h1>

              </div>

              
            </div>

<article id='view-btn'>
<div className="row">
            {SpecialityDataTwo.map((item, index) => {
              return(
                
        <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
        <Link to='doctors'>
                <div className="profile-widget profile-img">
                  <div className="doc-img">
                    <a href="#/" tabIndex="-1">
                      <img className="img-fluid" alt="ProductImage" src={item.img} width={60}/>
                    </a>
                    <a href="#/" className="fav-btn" tabIndex="-1">
                      <i className="far fa-bookmark"></i>
                    </a>
                  </div>
                  <div className="pro-content">
                    <h3 className="title">
                     <b> <a href="#/" tabIndex="-1" className='text-center'>{item.text}</a> </b>
                    </h3>
                    <div className="align-items-center colordiv" >
                    <Link to='/s-list'>
                      <p className='l-a text-center'>Search Doctors</p>
                    </Link>
                    </div>
                  </div>
                </div>	
                </Link>	
                </div>
               
              )
            })}
          </div>
</article>
            
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default SpecialityList;