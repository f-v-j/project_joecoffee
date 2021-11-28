


import Header from "./Header";
import MenuBar from "./MenuBar";
import TextArea from "./TextArea";
import Footer from "./Footer";

function PageFrame() {
    return (
        <div className="App">
            <Header />
            <MenuBar />
            <TextArea />
            <Footer />
        </div>
    );
}

export default PageFrame;