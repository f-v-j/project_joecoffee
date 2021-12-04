import './Banner.css';

function Banner(props) {

    return (
            <div className="banner">
                <img src={props.image} className="" alt="" />
            </div>


    );
}

export default Banner;
