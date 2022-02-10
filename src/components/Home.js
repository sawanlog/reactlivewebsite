import React, { Component } from "react";
import Nav from './Nav';
import Footer from "./Footer";
//import Commingsoon from './Commingsoon';

// import Booktable from "./Booktable";
class Home extends Component {
  render() {
    return (
        <>
               <div className="header">
        <div className="container">
            <br/>
            <a href="/"><img src="img/dslogo.png"  alt="DS Canteen"/></a>
            <Nav />
        </div>
    </div>


    <section className="banner">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h4>Here you can find delecious foods</h4>
                    <h2>Dotsquares canteen</h2>
                    <p>Quisque nec nibh id lacus fringilla eleifend sed sit amet sem. Donec lectus odio, mollis a nisl non, tempor interdum nisl.</p>
                    <div className="primary-button">
                    <a href="/booktable"  data-id="book-table">Order Right Now</a>
                        {/* <a href="/booktable" className="scroll-link" data-id="book-table">Order Right Now</a> */}
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="cook-delecious">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-md-offset-1">
                    <div className="first-image">
                        <img src="img/cook_01.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cook-content">
                        <h4>We cook delecious</h4>
                        <div className="contact-content">
                            <span>You can call us on:</span>
                            <h6>+ 1234 567 8910</h6>
                        </div>
                        <span>or</span>
                        <div className="primary-white-button">
                            <a href="/booktable" data-id="book-table">Order Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="second-image">
                        <img src="img/cook_02.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="services">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service-item">
                        <a href="/breakfastapi">
                        <img src="img/cook_breakfast.png" alt="Breakfast"/>
                        <h4>Breakfast</h4>
                        </a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service-item">
                        <a href="/lunch">
                        <img src="img/cook_lunch.png" alt="Lunch"/>
                        <h4>Lunch</h4>
                        </a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service-item">
                        <a href="/dinner">
                        <img src="img/cook_dinner.png" alt="Dinner"/>
                        <h4>Dinner</h4>
                        </a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="service-item">
                        <a href="/dessert">
                        <img src="img/cook_dessert.png" alt="Desserts"/>
                        <h4>Desserts</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="get-app">
        <div class="container">
            <div class="row">
                <div class="heading">
                    <h2>Get application for your phone</h2>
                </div>
                <div class="primary-white-button">
                    <a href="/commingsoon">Download now</a>
                </div>
            </div>
        </div>
    </section>


    <section class="featured-food">
        <div class="container">
            <div class="row">
                <div class="heading">
                    <h2>Weekly Featured Food</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="food-item">
                        <h2>Breakfast</h2>
                        <img src="img/breakfast_item.jpg" alt=""/>
                        <div class="price">$4.50</div>
                        <div class="text-content">
                            <h4>Kale Chips Art Party</h4>
                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean shorts hexagon street art knausgaard wolf...</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="food-item">
                        <h2>Lunch</h2>
                        <img src="img/lunch_item.jpg" alt=""/>
                        <div class="price">$7.50</div>
                        <div class="text-content">
                            <h4>Taiyaki Gastro Tousled</h4>
                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean shorts hexagon street art knausgaard wolf...</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="food-item">
                        <h2>Dinner</h2>
                        <img src="img/dinner_item.jpg" alt=""/>
                        <div class="price">$12.50</div>
                        <div class="text-content">
                            <h4>Batch Squid Jean Shorts</h4>
                            <p>Dreamcatcher squid ennui cliche chicharros nes echo  small batch jean shorts hexagon street art knausgaard wolf...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section class="our-blog">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="heading">
                        <h2>Our blog post</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="blog-post">
                        <img src="img/blog_post_01.jpg" alt=""/>
                        <div class="date">26 Oct 2017</div>
                        <div class="right-content">
                            <h4>Stumptown Tofu Schlitz</h4>
                            <span>Branding / Admin</span>
                            <p>Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...</p>
                            <div class="text-button">
                                <a href="/">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="blog-post">
                        <img src="img/blog_post_02.jpg" alt=""/>
                        <div class="date">21 Oct 2017</div>
                        <div class="right-content">
                            <h4>Succulents Hashtag Folk</h4>
                            <span>Branding / Admin</span>
                            <p>Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...</p>
                            <div class="text-button">
                                <a href="/">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="blog-post">
                        <img src="img/blog_post_03.jpg" alt=""/>
                        <div class="date">11 Oct 2017</div>
                        <div class="right-content">
                            <h4>Knaus Sriracha Pinterest</h4>
                            <span>Dessert / Chef</span>
                            <p>Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...</p>
                            <div class="text-button">
                                <a href="/">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="blog-post">
                        <img src="img/blog_post_04.jpg" alt=""/>
                        <div class="date">03 Oct 2017</div>
                        <div class="right-content">
                            <h4>Crucifix Selvage Coat</h4>
                            <span>Plate / Chef</span>
                            <p>Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...</p>
                            <div class="text-button">
                                <a href="/">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="sign-up">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="heading">
                        <h2>Signup for our newsletters</h2>
                    </div>
                </div>
            </div>
            <form id="contact" action="" method="get" >
                <div className="row">
                    <div className="col-md-4 col-md-offset-3">
                        <fieldset>
                            <input name="email" type="text" className="form-control" id="email" placeholder="Enter your email here..." required/>
                        </fieldset>
                    </div>
                    <div classNmae="col-md-2">
                        <fieldset>
                            <button type="submit" id="form-submit" className="btn">Send Message</button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    </section>



<Footer />
        </>
    )
}
}

export default Home;
