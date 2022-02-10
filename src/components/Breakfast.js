import React from 'react';
import Nav from './Nav';
import Footer from "./Footer";

const Breakfast = () => {
    return (
        <>
         <div className="header">
        <div className="container">
        <br/>
            <a href="/"><img src="img/dslogo.png"  alt="DS Canteen"/></a>
            <Nav />
        </div>
    </div>


    <section className="page-heading">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Our Menus</h1>
                    <p>Curabitur at dolor sed felis lacinia ultricies sit amet vel sem. Vestibulum diam leo, sodales tempor lectus sed, varius gravida mi.</p>
                </div>
            </div>
        </div>
    </section>
    <section className="breakfast-menu">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="breakfast-menu-content">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="left-image">
                                    <img src="img/breakfast_menu.jpg" alt="Breakfast"/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h2>Breakfast Menu</h2>
                                <div id="owl-breakfast" className="owl-carousel owl-theme">
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="images/maggi.jpg" alt=""/>
                                            <div className="price">12₹</div>
                                            <div className="text-content">
                                                <h4>Maggi</h4>
                                                <p>I love Maggi realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="images/corn.jpg" alt=""/>
                                            <div className="price">10₹</div>
                                            <div className="text-content">
                                                <h4>Corn</h4>
                                                <p>Corn squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="images/samosa.jpg" alt=""/>
                                            <div className="price">10₹</div>
                                            <div className="text-content">
                                                <h4>Samosa</h4>
                                                <p>Samosa squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer />  
        </>
    )
}

export default Breakfast
