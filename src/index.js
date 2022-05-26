import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

import AppBanner from './Images/App-banner-2500x998.jpg';
import shop1 from './Images/shop-image-1.png';
import shop2 from './Images/shop-image-1.png';
import shop3 from './Images/shop-image-1.png';

import tea1 from './Images/tea_1_960x960.jpg'
import tea2 from './Images/tea_2_960x960.jpg';
import tea3 from './Images/tea_3_960x960.jpg';

import BrewGear1 from './Images/BrewGear_1_960x960.jpg'
import BrewGear2 from './Images/BrewGear_2_960x960.jpg';
import BrewGear3 from './Images/BrewGear_3_960x960.jpg';


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
                "header":   "The Article",
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
            "header":   "The Article",
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
            "header":   "Rockefeller Holiday Coffee",
            "textheader"  :   "Tastes like",
            "text"  :   "ALMOND BRITTLE, APPLE, DATE",
            "price" :   "$16.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "5",
            "image" :   shop2,
            "header":   "The Waverly Espresso",
            "textheader"  :   "Tastes like",
            "text"  :   "CHOCOLATE, CARAMEL, MOLASSES",
            "price" :   "$15.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "6",
            "image" :   shop3,
            "header":   "Amsterdam",
            "text"  :   "CHOCOLATE FUDGE, MOLASSES, CINNAMON",
            "textheader"  :   "Tastes like",
            "price" :   "$14.00",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "7",
            "image" :   shop1,
            "header":   "Nightcap Decaf",
            "textheader"  :   "Tastes like",
            "text"  :   "ALMOND BRITTLE, APPLE, DATE",
            "price" :   "$16.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "8",
            "image" :   shop2,
            "header":   "Half Moon (Half Caff)",
            "textheader"  :   "Tastes like",
            "text"  :   "CHOCOLATE, CARAMEL, MOLASSES",
            "price" :   "$15.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "9",
            "image" :   shop3,
            "header":   "Colombia La Familia Guarnizo",
            "text"  :   "CHOCOLATE FUDGE, MOLASSES, CINNAMON",
            "textheader"  :   "Tastes like",
            "price" :   "$14.00",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "10",
            "image" :   shop2,
            "header":   "Guatemala San José",
            "textheader"  :   "Tastes like",
            "text"  :   "CHOCOLATE, CARAMEL, MOLASSES",
            "price" :   "$15.50",
            "type"  :   "Cofee"

        },
        {
            "id"    :   "11",
            "image" :   shop3,
            "header":   "Rwanda Agasaro",
            "text"  :   "CHOCOLATE FUDGE, MOLASSES, CINNAMON",
            "textheader"  :   "Tastes like",
            "price" :   "$14.00",
            "type"  :   "Cofee"

        }
    ],
    "Tea"  : [
        {
            "id"    :   "101",
            "image" :   tea1,
            "header":   "Resilience Turmeric Elixir 15 Serving Canister",
            "textheader"  :   "Tastes like",
            "text"  :   "Resilience Turmeric Elixir 15 Serving Canister",
            "price" :   "$24.00",
            "type"  :   "tea"

        },
        {
            "id"    :   "102",
            "image" :   tea2,
            "header":   "Resilience Turmeric Elixir Box of 10 Single Sachets",
            "textheader"  :   "Tastes like",
            "text"  :   "Resilience Turmeric Elixir Box of 10 Single Sachets",
            "price" :   "$20.00",
            "type"  :   "tea"

        },
        {
            "id"    :   "103",
            "image" :   tea3,
            "header":   "Resilience Turmeric Elixir 30 Serving Pouch",
            "textheader"  :   "Tastes like",
            "text"  :   "Resilience Turmeric Elixir Box of 10 Single Sachets",
            "price" :   "$37.50",
            "type"  :   "tea"

        }
    ]
    ,
    "BrewGear"  : [
        {
            "id"    :   "201",
            "image" :   BrewGear1,
            "header":   "8-Cup Chemex® Woodneck Brewer",
            "textheader"  :   "",
            "text"  :   "8-Cup Chemex® Woodneck Brewer",
            "price" :   "$45.00",
            "type"  :   "BrewGear"

        },
        {
            "id"    :   "202",
            "image" :   BrewGear2,
            "header":   "Kalita Wave 155 Glass Dripper",
            "textheader"  :   "",
            "text"  :   "Kalita Wave 155 Glass Dripper",
            "price" :   "$30.00",
            "type"  :   "BrewGear"

        },
        {
            "id"    :   "203",
            "image" :   BrewGear3,
            "header":   "Hario V60 Buono Kettle 1L",
            "textheader"  :   "",
            "text"  :   "Hario V60 Buono Kettle 1L",
            "price" :   "$60.00",
            "type"  :   "BrewGear"

        }
    ]
};



const initialState = {
    order : [],
    goods:goods,
    GetGoodFromID: (id,goods)=>{
        for (const goodstype in goods) {
            for(let i=0; i<goods[goodstype].length; i++){
                if(goods[goodstype][i].id==id){
                    return goods[goodstype][i];
                }
            }
        }
    }
};

function reducer_orders(state=initialState,action){

    switch(action.type) {
        case 'ADD_GOOD':
            const set_from_arr = new Set(state.order);
            set_from_arr.add(action.payload);
            const arr_from_set = [...set_from_arr];
            return {...state, order:arr_from_set}

        case 'DELETE_GOOD':
            const set_from_arr1 = new Set(state.order);
            set_from_arr1.delete(action.payload); //set_from_arr1.delete(parseInt(action.payload));
            const arr_from_set1 = [...set_from_arr1];
            return {...state, order:arr_from_set1}

        default: return {...state}
    }
}

const store = createStore(reducer_orders);
console.log("store:",store.getState());

export const language = React.createContext('en');

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <language.Provider value="uk">
                <App dispatch={{pages:pages, goods:goods}} />
            </language.Provider>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();