import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import images from "../../assets/images.js";
import Join from "../../components/join/join.jsx";
import Progress from "../../components/progress/progress.jsx";

function Water() {
    return (
        <div className="water">
            <Header water='active' />
            <Progress message="Page developement in progress." />
            <Join image={images.water1} />
            <Footer water='active' />
        </div>
    )
};

export default Water;