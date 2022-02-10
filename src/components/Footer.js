import React from 'react'

const Footer = () => {
    return (
        <>
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <p>Copyright &copy; 2022 DS Canteen</p>
                </div>
                <div className="col-md-4">
                    <ul className="social-icons">
                        <li><a rel="nofollow" href="http://www.facebook.com/DS Canteen" target="_parent"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="/"><i className="fa fa-rss"></i></a></li>
                        <li><a href="/"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <p>Designed by <em>DS Canteen</em></p>
                </div>
            </div>
        </div>
        </footer>
        </>
    )
}

export default Footer
