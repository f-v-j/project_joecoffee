import React from 'react';
import './App.css';
import MainPage from "./Pages/MainPage/Mainpage";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Cofee from "./Pages/Shop/Cofee/Cofee";
import Careers from "./Pages/Careers/Careers";
import CareersBanner from "./Images/Careers-banner-2500x998.jpg";
import Catering from "./Pages/Catering/Catering";
import CateringBanner from "./Images/Catering-banner-2500x998.jpg";
import Location from "./Pages/Location/Location";
import TheWorkshop from "./Pages/TheWorkshop/TheWorkshop";
import TheWorkshopBanner from "./Images/TheWorkshop-banner-2500x998.png";
import Wholesale from "./Pages/Wholesale/Wholesale";
import WholesaleBanner from "./Images/Wholesale-banner-2500x998.jpg";
import Daily from "./Pages/Shop/Daily/Daily";



function App(props) {
    let GetGoodFromID = (id)=>{
        for (const goodstype in props.dispatch.goods) {
            for(let i=0; i<props.dispatch.goods[goodstype].length; i++){
                if(props.dispatch.goods[goodstype][i].id==id){
                    return props.dispatch.goods[goodstype][i];
                }
            }
        }
    }
    let goodsroutes=[];
    for(let i=1; i<=props.dispatch.goods.Cofee.length; i++){
        let aaa ='/shop/daily/'+i;
        let good = GetGoodFromID(i);
        goodsroutes.push(<Route  path={aaa} element={<Daily id={i} dispatch={good}/>} />);
    }

  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route  path='/' element={<MainPage dispatch={props.dispatch.pages.MainPage} />} />
                  <Route  path='/shop/cofee' element={<Cofee dispatch={props.dispatch.goods.Cofee} />} />
                  {goodsroutes}
                  <Route  path='/careers' element={<Careers image={CareersBanner} />} />
                  <Route  path='/catering' element={<Catering image={CateringBanner} />} />
                  <Route  path='/location' element={<Location />} />
                  <Route  path='/theworkshop' element={<TheWorkshop image={TheWorkshopBanner} />} />
                  <Route  path='/wholesale' element={<Wholesale image={WholesaleBanner} />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}
export default App;