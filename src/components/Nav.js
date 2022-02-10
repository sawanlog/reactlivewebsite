import React from 'react'

const Nav = () => {
    return (
        <>
             <nav className="navbar navbar-inverse" role="navigation">
                <div className="navbar-header">
                    <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="/main-nav">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>

                <div id="main-nav" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/our-menus">Our Menus</a></li>
                        <li><a href="/blog">Blog Entries</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><div className="primary-button">
                           <a href="/signing">Login/Signup</a>
                           </div></li>
                        <li><div className="cart-icon">
                           <a href="/cart"><img src="./images/cart.png" alt="cart" /></a>
                           </div></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Nav
