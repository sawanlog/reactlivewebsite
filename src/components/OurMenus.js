import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
//import Booktable from './Booktable';



export const OurMenus = () => {
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
                                                <button className="btn btn-success">Add to Cart</button>
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
                                                <button className="btn btn-success">Add to Cart</button>
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
                                                <button className="btn btn-success">Add to Cart</button>
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



    <section className="lunch-menu">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="lunch-menu-content">
                        <div className="row">
                            <div className="col-md-7">
                                <h2>Lunch Menu</h2>
                                <div id="owl-lunch" className="owl-carousel owl-theme">
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="img/lunch_item.jpg" alt=""/>
                                            <div className="price">$6.50</div>
                                            <div className="text-content">
                                                <h4>Mumble Ditch Corn</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                                <button className="btn btn-success">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="img/breakfast_item.jpg" alt=""/>
                                            <div className="price">$11.75</div>
                                            <div className="text-content">
                                                <h4>Wayfare Lomo Core</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                                <button className="btn btn-success">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="img/dinner_item.jpg" alt=""/>
                                            <div className="price">$16.50</div>
                                            <div className="text-content">
                                                <h4>Taiyaki Gastro Tousled</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                                <button className="btn btn-success">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="left-image">
                                    <img src="img/lunch_menu.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="dinner-menu">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="dinner-menu-content">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="left-image">
                                    <img src="img/dinner_menu.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h2>Dinner Menu</h2>
                                <div id="owl-dinner" className="owl-carousel owl-theme">
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="img/dinner_item.jpg" alt=""/>
                                            <div className="price">$8.25</div>
                                            <div className="text-content">
                                                <h4>Meal Apples Almonds</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                                <button className="btn btn-success">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="img/lunch_item.jpg" alt=""/>
                                            <div className="price">$12.50</div>
                                            <div className="text-content">
                                                <h4>Ditch Corn Art</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                                <button className="btn btn-success">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-md-12">
                                        <div className="food-item">
                                            <img src="img/breakfast_item.jpg" alt=""/>
                                            <div className="price">$16.00</div>
                                            <div className="text-content">
                                                <h4>Kale Chips Art Party</h4>
                                                <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean ditcher meal...</p>
                                                <button className="btn btn-success">Add to Cart</button>
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



    {/* <Booktable /> */}



    <Footer />
        </>
    )
}
export default OurMenus
