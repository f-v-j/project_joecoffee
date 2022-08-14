
const show_time = (seconds) => {
    let hours = Math.floor(seconds/60);
    seconds = seconds - hours*60;
    if (hours<10) hours = "0"+hours;
    if (seconds<10) seconds = "0"+seconds;
    return hours + " : " + seconds;
}


export const start_timer = (settime) =>{

    document.getElementById('set_timer').style.display = 'none';
    let time = settime.innerHTML*60;
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