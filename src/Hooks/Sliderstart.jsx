
export function Sliderstart() {

    let slider=document.getElementById("slider");
    let i=2;
    const max=6;

    setInterval(()=>{

        if(i==1){
                slider.getElementsByTagName('img')[max].style.opacity = 0;
                slider.getElementsByTagName('img')[i].style.opacity = 1;
         }
        else {
                slider.getElementsByTagName('img')[i - 1].style.opacity = 0;
                slider.getElementsByTagName('img')[i].style.opacity = 1;
         }

         if( i < max ) i++; else i = 1;

        },5000);

}


