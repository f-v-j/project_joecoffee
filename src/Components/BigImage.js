import './BigImage.css';

function BigImage(props) {

    return (
            <div className="bigimage">
                <img src={props.image} className="" alt="" />
            </div>


    );
}

export default BigImage;
