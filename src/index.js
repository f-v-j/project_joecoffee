import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

import AppBanner from './Images/App-banner-2500x998.jpg';
import shop1 from './Images/shop-image-1.png';
import shop2 from './Images/shop-image-1.png';
import shop3 from './Images/shop-image-1.png';
import Wholesaleblock from './Images/Wholesale-Block-960x720.jpg';
import TheWorkshopblock from './Images/TheWorkshop-block-960x720.jpg';
import Cateringblock from './Images/Catering-block-960x720.jpg';

let pages={
    "MainPage": {
            "mainimage": AppBanner,
            "shopblocks": [
                {
                    "id"    :   "1",
                    "image" :   shop1,
                    "header":   "Nicaragua Las Delicias",
                    "textheader"  :   "Tastes like",
                    "text"  :   "ALMOND BRITTLE, APPLE, DATE",
                    "price" :   "$16.50",
                    "type"  :   "Cofee"

                },
                {
                    "id"    :   "2",
                    "image" :   shop2,
                    "header":   "The Daily",
                    "textheader"  :   "Tastes like",
                    "text"  :   "CHOCOLATE, CARAMEL, MOLASSES",
                    "price" :   "$15.50",
                    "type"  :   "Cofee"

                },
                {
                    "id"    :   "3",
                    "image" :   shop3,
                    "header":   "Great Heights",
                    "text"  :   "CHOCOLATE FUDGE, MOLASSES, CINNAMON",
                    "textheader"  :   "Tastes like",
                    "price" :   "$14.00",
                    "type"  :   "Cofee"

                }
            ],

        "banner": {
            "image": AppBanner,
            "header": "Coffee Subscriptions",
            "text": "FRESHLY ROASTED COFFEE DELIVERED TO YOUR HOME",
            "linktext": "Get started",
            "link": "/offerings/subscribe"


        },


            "advertblocks": [

                {
                    "image" :   TheWorkshopblock,
                    "header":   "Classes",
                    "text"  :   "From manual brewing and latte art to full barista courses, we offer a variety of classes for every skill level!",
                    "link"  :   "/theworkshop"

                },
                {
                    "image" :   Wholesaleblock,
                    "header":   "Wholesale",
                    "text"  :   "Interested in serving Joe Coffee? Learn more about our wholesale program.",
                    "link"  :   "/wholesale"

                },
                {
                    "image" :   Cateringblock,
                    "header":   "Event Catering",
                    "text"  :   "Have an event that needs catering? Book a custom coffee bar for your next meeting or event.",
                    "link"  :   "/catering"

                }

            ]
    }
};
let goods={
    "Cofee": [
        {
            "id"    :   "1",
            "image" :   shop1,
            "header":   "Nicaragua Las Delicias",
            "textheader"  :   "Tastes like",
            "text"  :   "ALMOND BRITTLE, APPLE, DATE",
            "price" :   "$16.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "2",
            "image" :   shop2,
            "header":   "The Daily",
            "textheader"  :   "Tastes like",
            "text"  :   "CHOCOLATE, CARAMEL, MOLASSES",
            "price" :   "$15.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "3",
            "image" :   shop3,
            "header":   "Great Heights",
            "text"  :   "CHOCOLATE FUDGE, MOLASSES, CINNAMON",
            "textheader"  :   "Tastes like",
            "price" :   "$14.00",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "4",
            "image" :   shop1,
            "header":   "Nicaragua Las Delicias",
            "textheader"  :   "Tastes like",
            "text"  :   "ALMOND BRITTLE, APPLE, DATE",
            "price" :   "$16.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "5",
            "image" :   shop2,
            "header":   "The Daily",
            "textheader"  :   "Tastes like",
            "text"  :   "CHOCOLATE, CARAMEL, MOLASSES",
            "price" :   "$15.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "6",
            "image" :   shop3,
            "header":   "Great Heights",
            "text"  :   "CHOCOLATE FUDGE, MOLASSES, CINNAMON",
            "textheader"  :   "Tastes like",
            "price" :   "$14.00",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "7",
            "image" :   shop1,
            "header":   "Nicaragua Las Delicias",
            "textheader"  :   "Tastes like",
            "text"  :   "ALMOND BRITTLE, APPLE, DATE",
            "price" :   "$16.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "8",
            "image" :   shop2,
            "header":   "The Daily",
            "textheader"  :   "Tastes like",
            "text"  :   "CHOCOLATE, CARAMEL, MOLASSES",
            "price" :   "$15.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "9",
            "image" :   shop3,
            "header":   "Great Heights",
            "text"  :   "CHOCOLATE FUDGE, MOLASSES, CINNAMON",
            "textheader"  :   "Tastes like",
            "price" :   "$14.00",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "10",
            "image" :   shop2,
            "header":   "The Daily",
            "textheader"  :   "Tastes like",
            "text"  :   "CHOCOLATE, CARAMEL, MOLASSES",
            "price" :   "$15.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "11",
            "image" :   shop3,
            "header":   "Great Heights",
            "text"  :   "CHOCOLATE FUDGE, MOLASSES, CINNAMON",
            "textheader"  :   "Tastes like",
            "price" :   "$14.00",
            "type"  :   "Cofee"

        }
    ]
};

ReactDOM.render(
  <React.StrictMode>
      <App dispatch={{pages:pages, goods:goods}} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
