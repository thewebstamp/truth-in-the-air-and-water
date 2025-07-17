import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import Progress from "../../components/progress/progress.jsx";

function Resources() {
    return (
        <div className="resources">
            <Header resources='active' />
            <Progress message="Page developement is in progress." />
            <Footer resources='active' />
        </div>
    )
};

export default Resources;