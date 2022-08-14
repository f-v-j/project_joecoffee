import React, {useEffect,useState} from "react";
import './Timer.css';
import Header from "../../Components/Header/Header";
import MenuBar from "../../Components/MenuBar/MenuBar";
import Footer from "../../Components/Footer/Footer";


function Timer(props) {

    const [count, setCount] = useState(0);

    let show_time = (seconds) => {
        let hours = Math.floor(seconds/60);
        seconds = seconds - hours*60;
        if (hours<10) hours = "0"+hours;
        if (seconds<10) seconds = "0"+seconds;
        return hours + " : " + seconds;
    }
    let start_timer = (settime) =>{

        document.getElementById('set_timer').style.display = 'none';
        // let time = settime.innerHTML*60;
        let time = settime*60;
        let timer = document.getElementById('timer');
        timer.innerHTML = show_time(time);

        let timer_id = setInterval(()=>{
            time--;
            timer.innerHTML = show_time(time);
            if(time==0) {
                clearInterval(timer_id);

            }
        },1000);


    }

    useEffect(()=>{

        if(count!=0) start_timer(count);

    },[count]);

    return (
        <div className="timerpage">
            <Header />
            <MenuBar />

            <h1>Timer</h1>

            <div id='container'>
                <div id="set_timer">
                    <span id="t1" onClick={() => setCount(1)}>1</span>
                    <span id="t2" onClick={() => setCount(2)}>2</span>
                    <span id="t3" onClick={() => setCount(3)}>3</span>
                    <span id="t4" onClick={() => setCount(4)}>4</span>
                    <span id="t5" onClick={() => setCount(5)}>5</span>
                    <span id="t6" onClick={() => setCount(6)}>6</span>
                    <span id="t7" onClick={() => setCount(7)}>7</span>
                    <span id="t8" onClick={() => setCount(8)}>8</span>
                    <span id="t9" onClick={() => setCount(9)}>9</span>
                    <span id="t10" onClick={() => setCount(10)}>10</span>
                </div>

                <h1 id='timer'></h1>
            </div>


            <Footer />
        </div>
    );
}


export default Timer;
