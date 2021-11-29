


import Header from "./Header";
import MenuBar from "./MenuBar";
import TextArea from "./TextArea";
import Footer from "./Footer";

function PageFrame(props) {
    return (
        <div className="App">
            <Header />
            <MenuBar />
            <TextArea image={props.image}/>
            <Footer />
        </div>
    );
}

export default PageFrame;