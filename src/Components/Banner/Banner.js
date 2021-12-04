import './Banner.css';

function Banner(props) {

    return (
            <div className="banner">
                <img src={props.dispatch.image} className="" alt="" />

                <div className="bannertextarea">
                    <p>{props.dispatch.text}</p>
                    <h2>{props.dispatch.header}</h2>
                    <a href={props.dispatch.link}>{props.dispatch.linktext}</a>


                </div>

            </div>



    );
}

export default Banner;
