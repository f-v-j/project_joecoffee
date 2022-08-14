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
import Article from "./Pages/Shop/Article/Article";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Basket from "./Pages/Basket/Basket";
import Timer from "./Pages/Timer/Timer";
import NoPage from "./Pages/NoPage/NoPage";
import {Testpage} from "./Pages/Testpage/Testpage";
import {TestpageTS} from "./Pages/Testpage/TestpageTS";



function App(props) {





    let GetGoodFromID = (id,goods)=>{
        for (const goodstype in goods) {
            for(let i=0; i<goods[goodstype].length; i++){
                if(goods[goodstype][i].id==id){
                    return goods[goodstype][i];
                }
            }
        }
    }

    let goodsroutes=[];
    for (const goodstype in props.dispatch.goods) {
        for(let i=0; i<props.dispatch.goods[goodstype].length; i++){
            let path ='/shop/article/'+props.dispatch.goods[goodstype][i].id + "/:slug";
            goodsroutes.push(<Route  path={path} element={<Article id={props.dispatch.goods[goodstype][i].id} />} />);
        }
    }

    // for(let i=1; i<=props.dispatch.goods.Cofee.length; i++){
    //     let path ='/shop/article/'+i;
    //     let good = GetGoodFromID(i,props.dispatch.goods);
    //     goodsroutes.push(<Route  path={path} element={<Article id={i} />} />);
    // }

  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route  path='/' element={<MainPage dispatch={props.dispatch.pages.MainPage} goods={props.dispatch.goods.Cofee} />} />
                  <Route  path='/shop/cofee' element={<Cofee dispatch={props.dispatch.goods.Cofee} />} />
                  <Route  path='/shop/tea' element={<Cofee dispatch={props.dispatch.goods.Tea} />} />
                  <Route  path='/shop/brewgear' element={<Cofee dispatch={props.dispatch.goods.BrewGear} />} />
                  {goodsroutes}
                  <Route  path='/careers' element={<Careers image={CareersBanner} />} />
                  <Route  path='/catering' element={<Catering image={CateringBanner} />} />
                  <Route  path='/location' element={<Location />} />
                  <Route  path='/theworkshop' element={<TheWorkshop image={TheWorkshopBanner} />} />
                  <Route  path='/wholesale' element={<Wholesale image={WholesaleBanner} />} />
                  <Route  path='/my-account' element={<MyAccount />} />
                  <Route  path='/basket' element={<Basket />} />
                  <Route  path='/timer' element={<Timer />} />
                  <Route  path='/testpage' element={<Testpage author="Vova" age="46"/>} />
                  <Route  path='/testpageTS' element={<TestpageTS author="Vova" age="46"/>} />
                  <Route  path='/*' element={<NoPage />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}
export default App;
