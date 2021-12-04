import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom"


import App from './App';
import Careers from "./Pages/Careers/Careers";
import Catering from "./Pages/Catering/Catering";
import Location from "./Pages/Location/Location";
import TheWorkshop from "./Pages/TheWorkshop/TheWorkshop";
import Wholesale from "./Pages/Wholesale/Wholesale";


import AppBanner from './Images/App-banner-2500x998.jpg';
import CateringBanner from './Images/Catering-banner-2500x998.jpg';
import CareersBanner from './Images/Careers-banner-2500x998.jpg';
import WholesaleBanner from './Images/Wholesale-banner-2500x998.jpg';
import TheWorkshopBanner from './Images/TheWorkshop-banner-2500x998.png';
import shop1 from './Images/shop-image-1.png';
import shop2 from './Images/shop-image-1.png';
import shop3 from './Images/shop-image-1.png';

import Wholesaleblock from './Images/Wholesale-Block-960x720.jpg';
import TheWorkshopblock from './Images/TheWorkshop-block-960x720.jpg';
import Cateringblock from './Images/Catering-block-960x720.jpg';








let pages={

    "App": {
            "main-image": {AppBanner},
            "shop-blocks": [
                {
                    "image" :   {shop1},
                    "header":   "Classes",
                    "textheader"  :   "Tastes like",
                    "text"  :   "kshkshfkshfkshfkshfkshfks",
                    "price" :   "$0.00",
                    "link"  :   "http://dfgf"

                },
                {
                    "image" :   {shop2},
                    "header":   "Classes",
                    "textheader"  :   "Tastes like",
                    "text"  :   "kshkshfkshfkshfkshfkshfks",
                    "price" :   "$0.00",
                    "link"  :   "http://dfgf"

                },,
                {
                    "image" :   {shop3},
                    "header":   "Classes",
                    "text"  :   "kshkshfkshfkshfkshfkshfks",
                    "textheader"  :   "Tastes like",
                    "price" :   "$0.00",
                    "link"  :   "http://dfgf"

                },
            ],
            "banner-image": {AppBanner},
            "advert-blocks": [

                {
                    "image" :   {TheWorkshopblock},
                    "header":   "Classes",
                    "text"  :   "From manual brewing and latte art to full barista courses, we offer a variety of classes for every skill level!",
                    "link"  :   "/theworkshopf"

                },
                {
                    "image" :   {Wholesaleblock},
                    "header":   "Wholesale",
                    "text"  :   "Interested in serving Joe Coffee? Learn more about our wholesale program.",
                    "link"  :   "/wholesale"

                },
                {
                    "image" :   {Cateringblock},
                    "header":   "Event Catering",
                    "text"  :   "Have an event that needs catering? Book a custom coffee bar for your next meeting or event.",
                    "link"  :   "/catering"

                },
                {
                    "image" :   {shop1},
                    "header":   "",
                    "text"  :   "kshkshfkshfkshfkshfkshfks",
                    "link"  :   "http://dfgf"

                },
                {
                    "image" :   {shop2},
                    "header":   "",
                    "text"  :   "kshkshfkshfkshfkshfkshfks",
                    "link"  :   "http://dfgf"

                }
            ]
    }
};

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>

          <Routes>

              <Route  path='/' element={<App image={AppBanner} />} />

              <Route  path='/careers' element={<Careers image={CareersBanner} />} />
              <Route  path='/catering' element={<Catering image={CateringBanner} />} />
              <Route  path='/location' element={<Location />} />
              <Route  path='/theworkshop' element={<TheWorkshop image={TheWorkshopBanner} />} />
              <Route  path='/wholesale' element={<Wholesale image={WholesaleBanner} />} />


          </Routes>

          {/*<App image={img1} />*/}

      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
