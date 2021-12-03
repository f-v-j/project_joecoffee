
import Header from "./Header";
import MenuBar from "./MenuBar";
import TextArea from "./TextArea";
import Footer from "./Footer";

function PageFrame(props) {
    return (
        <div className="page-frame">
            <Header />
            <MenuBar />
            <TextArea image={props.image} page={props.page} />
            <Footer />
        </div>
    );
}

export default PageFrame;