import React from 'react';
import Nav from './Nav';
import Footer from "./Footer";

const Blog = () => {
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
                    <h1>Our Blog</h1>
                    <p>Whatever drinking vinegar hella fingerstache shoreditch kickstarter kitsch. La croix hella iceland flexitarian letterpress.</p>
                </div>
            </div>
        </div>
    </section>


    <section className="blog-page">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="blog-item">
                        <img src="img/blog_item_01.jpg" alt=""/>
                        <div className="date">26 Oct 2017</div>
                        <div className="down-content">
                            <h4>Nullam ornare purus massa</h4>
                            <span>Branding / Admin</span>
                            <p>Vivamus venenatis mi enim, ut gravida sem viverra sit amet. Nam ullamcorper dui nec risus malesuada fringilla. Aliquam erat volutpat. Aliquam a varius odio. Quisque iaculis massa vel nunc porta vehicula. Nulla consectetur iaculis elit. Vivamus euismod lorem rutrum iaculis commodo. Cras congue nisi non varius tincidunt.</p>
                            <div className="text-button">
                                <a href="/">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-md-offset-2">
                    <div className="blog-item">
                        <img src="img/blog_item_02.jpg" alt=""/>
                        <div className="date">21 Oct 2017</div>
                        <div className="down-content">
                            <h4>Class aptent taciti sociosqu</h4>
                            <span>Branding / Admin</span>
                            <p>Praesent id pellentesque est. Etiam vestibulum eros quis vulputate convallis. Praesent quam diam, placerat a ipsum sed, facilisis dignissim lorem. Vivamus a elit vitae mauris fringilla scelerisque sit amet eget mauris. Suspendisse vulputate congue eleifend.</p>
                            <div className="text-button">
                                <a href="/">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-md-offset-2">
                    <div className="blog-item">
                        <img src="img/blog_item_03.jpg" alt=""/>
                        <div className="date">11 Oct 2017</div>
                        <div className="down-content">
                            <h4>Cras congue nisi non varius tincidunt</h4>
                            <span>Desserts / Chef</span>
                            <p>Mauris mollis urna sit amet eros pretium, a tincidunt tellus eleifend. Sed dictum sit amet sapien ut scelerisque. Duis vulputate elit vehicula nisl maximus eleifend. Suspendisse potenti. Aenean ut dui fermentum, pharetra quam vitae, placerat dolor. Curabitur at dolor sed felis lacinia ultricies sit amet vel sem.</p>
                            <div className="text-button">
                                <a href="/">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-md-offset-2">
                    <div className="blog-item">
                        <img src="img/blog_item_04.jpg" alt=""/>
                        <div className="date">03 Oct 2017</div>
                        <div className="down-content">
                            <h4>Vivamus euismod lorem</h4>
                            <span>Food / Chef</span>
                            <p>Pellentesque nec orci in erat venenatis viverra. Vivamus in lorem et leo feugiat ullamcorper. Donec volutpat fermentum erat non aliquet. Cras fermentum, risus a blandit sodales, erat turpis eleifend lacus, venenatis mollis leo lorem vel eros. Quisque et sem tempus, feugiat urna iaculis, tempor metus.</p>
                            <div className="text-button">
                                <a href="/">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-md-offset-2">
                    <ul className="page-number">
                        <li><a href="/">1</a></li>
                        <li className="active"><a href="/">2</a></li>
                        <li><a href="/">3</a></li>
                        <li><a href="/">4</a></li>
                        <li><a href="/">&gt;&gt;</a></li>
                    </ul>
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
            <form id="contact" action="" method="get">
                <div className="row">
                    <div className="col-md-4 col-md-offset-3">
                        <fieldset>
                            <input name="email" type="text" className="form-control" id="email" placeholder="Enter your email here..." required/>
                        </fieldset>
                    </div>
                    <div className="col-md-2">
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

export default Blog
