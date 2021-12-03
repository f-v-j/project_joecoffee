import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom"


import App from './App';
import Careers from "./Pages/Careers/Careers";
import Catering from "./Pages/Catering/Catering";
import Discover from "./Pages/Discover/Discover";
import Location from "./Pages/Location/Location";
import Shop from "./Pages/Shop/Shop";
import TheWorkshop from "./Pages/TheWorkshop/TheWorkshop";
import Wholesale from "./Pages/Wholesale/Wholesale";


import AppBanner from './Images/App-banner-2500x998.jpg';
import CateringBanner from './Images/Catering-banner-2500x998.jpg';
import CareersBanner from './Images/Careers-banner-2500x998.jpg';
import WholesaleBanner from './Images/Wholesale-Banner-2500x998.jpg';


import ShopBanner from './Images/Shop-banner-2500x998.jpg';
import LocationBanner from './Images/Location-banner-2500x998.jpg';
import DiscoverBanner from './Images/Discover-banner-2500x998.jpg';
import TheWorkshopBanner from './Images/TheWorkshop-banner-2500x998.png';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>

          <Routes>

              <Route  path='/' element={<App image={AppBanner} />} />

              <Route  path='/careers' element={<Careers image={CareersBanner} />} />
              <Route  path='/catering' element={<Catering image={CateringBanner} />} />
              <Route  path='/discover' element={<Discover image={DiscoverBanner} />} />
              <Route  path='/location' element={<Location image={LocationBanner} />} />
              <Route  path='/shop' element={<Shop image={ShopBanner} />} />
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
