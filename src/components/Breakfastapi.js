import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {useCart} from "react-use-cart";


const Breakfastapi = () => {
const { addItem } = useCart();

  const [data, setData] = useState([]);

  const getdata = async () => {
    const response = await fetch(`http://localhost:3000/users/menus`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ category: "Breakfast" }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 200) {
      setData(data.result);
    }
    //setData(await response.json());
  };
 
  useEffect(() => {
    getdata();
  }, []);


  return (
    <>
      <div className="header">
        <div className="container">
          <br />
          <a href="/">
            <img src="img/dslogo.png" alt="DS Canteen" />
          </a>
          <Nav />
        </div>
      </div>

      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Our Menus</h1>
              <p>
                Curabitur at dolor sed felis lacinia ultricies sit amet vel sem.
                Vestibulum diam leo, sodales tempor lectus sed, varius gravida
                mi.
              </p>
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
                      <img src="img/breakfast_menu.jpg" alt="Breakfast" />
                    </div>
                  </div>
                  <div class="col-md-7">
                    <h2>Breakfast</h2>
                    {data.length && (
                      <OwlCarousel className="owl-theme" loop margin={10} nav >
                        {data.map((curElem, i) => {
                          //console.log(curElem.image);
                          return (
                            <div class="item col-md-12">
                              <div class="food-item">
                                <img src={curElem.image_url} alt="" />
                                <div className="price">{curElem.price}</div>
                                <div className="text-content">
                                  <h4>{curElem.name}</h4>
                                  <p>{curElem.description}</p>
                                  <button className="btn btn-success" onClick={() =>addItem(curElem.item)}>Add to Cart</button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </OwlCarousel>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Breakfastapi;
