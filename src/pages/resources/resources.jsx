import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import ResourcesComp from "../../components/resourcesComp/resourcesComp.jsx";

function Resources() {
    return (
        <div className="resources">
            <Header resources='active' />
            <ResourcesComp />
            <Footer resources='active' />
        </div>
    )
};

export default Resources;