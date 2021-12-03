import './SmallImage.css';


import Lasdelicias from '../Images/lasdelicias-960x960.png';

function SmallImage(props) {

    return (
        <div className="smallimage">
            <img src={Lasdelicias} className="" alt="" />
            <p>SOME TEXT</p>
            <p>SOME TEXT</p>
            <p>SOME TEXT</p>
        </div>


    );
}

export default SmallImage;
