import './TextArea.css';
import BigImage from "./BigImage";
import SmallImage from "./SmallImage";

function TextArea(props) {

    return (
            <div className="">
                <img src={props.image} className="main_image" alt="" />

                <div className="text-block">




                        <SmallImage image={props.image} />
                        <SmallImage image={props.image} />
                        <SmallImage image={props.image} />




                    <BigImage image={props.image} />


                        <SmallImage image={props.image} />
                        <SmallImage image={props.image} />
                        <SmallImage image={props.image} />
                        <SmallImage image={props.image} />
                        <SmallImage image={props.image} />







                </div>

            </div>


    );
}

export default TextArea;
