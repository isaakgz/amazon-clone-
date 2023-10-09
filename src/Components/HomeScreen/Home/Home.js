import React from "react";
import "./Home.css";
import Product from "./Product";
import BackToTop from "../BackToTop/BackToTop";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home__image"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id={55}
            title="Before You Take Me Home."
            price={29}
            image="https://m.media-amazon.com/images/I/81sd0Je-iVL._AC_UL320_.jpg"
            rating={3}
            alt="product"
          />
          <Product
            id="49538094"
            title="Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch Retina Display,"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Texas Instruments TI-84 Plus CE Color Graphing Calculator, Black 7.5 Inch"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71yrLllDokL._AC_UL320_.jpg"
          />

          <Product
            id="3254354345"
            title="Mielle Organics Rosemary Mint Scalp & Hair Strengthening Oil With Biotin "
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61pQ8ZlA-8L._AC_UL320_.jpg"
          />
          <Product
            id={55}
            title="Before You Take Me Home."
            price={29}
            image="https://m.media-amazon.com/images/I/81sd0Je-iVL._AC_UL320_.jpg"
            rating={3}
            alt="product"
          />
        </div>
        <div className="home__row">
          <Product
             id="90829332"
             title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
             price={1094.98}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Modern Home Narrow Sliding Storage Organizer Rack - Laundry/Bathroom/Kitchen"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61H5xMP8s5L._AC_UL320_.jpg"
          />
          <Product
            id="23445930"
            title="Texas Instruments TI-84 Plus CE Color Graphing Calculator, Black 7.5 Inch"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71yrLllDokL._AC_UL320_.jpg"
          />

          <Product
            id="3254354345"
            title="Febreze Odor-Fighting Air Freshener, Linen & Sky, 8.8 "
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71IlUutBmIL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Texas Instruments TI-84 Plus CE Color Graphing Calculator, Black 7.5 Inch"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71yrLllDokL._AC_UL320_.jpg"
          />

          <Product
            id="3254354345"
            title="Skullcandy Jib True 2 In-Ear Wireless Earbuds, 32 Hr Battery, Microphone, Works with iPhone Android and Bluetooth Devices - "
            price={58.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61h5ALBhEtL._AC_UL320_.jpg"
          />
          <Product
            id={55}
            title="Intel Core i7-12700K Gaming Desktop Processor with Integrated Graphics and 12 (8P+4E) Cores up to 5.0 GHz."
            price={213}
            image="https://m.media-amazon.com/images/I/51GYVerUgML._AC_UL320_.jpg"
            rating={3}
            alt="product"
          />
        </div>
        <div className="home__row">
          <Product
             id="90829332"
             title="Amazon Basics 48-Pack AA Alkaline High-Performance Batteries, 1.5 Volt, 10-Year Shelf Life"
             price={1094.98}
             rating={4}
             image="https://m.media-amazon.com/images/I/81uBzbSP1+L._AC_UL320_.jpg"
          />
          <Product
            id={55}
            title="Before You Take Me Home."
            price={29}
            image="https://m.media-amazon.com/images/I/81sd0Je-iVL._AC_UL320_.jpg"
            rating={3}
            alt="product"
          />
        </div>
      </div>
      <BackToTop />
    </div>
  );
}

export default Home;
