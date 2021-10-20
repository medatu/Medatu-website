import React from 'react';
import BOne from './BOne';
import BTwo from './BTwo';
import './Blog.css'
import docOne from "../../../assets/img/blog/blog-1.jpg"
import docTwo from "../../../assets/img/blog/blog-2.jpg"
import docThree from "../../../assets/img/blog/blog-3.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function Blog() {
    return (
        <section className="section section-doctor">
            <div className="titleDiv">

                <div>Informatin of your health and Wellness</div>
                <div className="underLineDiv"></div>

            </div>

            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-4">
        <div className="b-header">
            <h2>Information for your health and wellness</h2>
        </div>
        <div className="about-content">
            <p style={{width: 'fit-content'}}>Easy-to-Read health information from our medical experts enables people to live in a better way as per health is concerned.</p>					
            <a className='r-more' href={() => false}>Read More</a>
        </div>
    </div> */}
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="s-blog">
                                {/* blog 1 */}
                                <div className="col-lg-6 col-md-6">
                                    <div className=" b-widget">
                                        <div className="doc-img">
                                            <Link as={Link} to="/blog">
                                                <img className="img-fluid" alt="User" src={docOne} />
                                            </Link>
                                            <a href={() => false} className="fav-btn">
                                                <FontAwesomeIcon icon={faBookmark} />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className='title'><b>10 foods for Healthy Heart</b></h3>

                                            <p>Eating healthy diet might help minimize the risk of heart diseases.</p>
                                        </div>
                                        <Link as={Link} to="/blog2">
                                        <button id="section-btn" >Read More</button>
                                        </Link>
                                    </div>

                                </div>
                                {/* blog 2 */}

                                <div className="col-lg-6 col-md-6">
                                    <div className="b-widget">
                                        <div className="doc-img">
                                            <Link as={Link} to="/blog2">
                                                <img className="img-fluid" alt="User" src={docTwo} />
                                            </Link>

                                            <a href={() => false} className="fav-btn">
                                                <FontAwesomeIcon icon={faBookmark} />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title"><b>10 Common COVID-19 Myths You Shouldn’t believe</b></h3>
                                            <p>It is time to separate fact from fiction.</p>
                                        </div>
                                        <button id="section-btn" >Read More</button>
                                    </div>
                                </div>

                                {/*Blog 3  */}
                                <div className="col-lg-6 col-md-6">
                                    <div className="b-widget">
                                        <div className="doc-img">
                                            <Link as={Link} to="/blog2">
                                                <img className="img-fluid" alt="User" src={docThree} />
                                            </Link>

                                            <a href={() => false} className="fav-btn">
                                                <FontAwesomeIcon icon={faBookmark} />
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title"><b>What is Sitting Disease?</b></h3>
                                            <p>Time to get active!  </p><br/>
                                        </div>
                                        <button id="section-btn">Read More</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;