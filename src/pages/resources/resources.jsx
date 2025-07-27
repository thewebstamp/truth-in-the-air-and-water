import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import ResourcesComp from "../../components/resourcesComp/resourcesComp.jsx";
import { Helmet } from 'react-helmet-async';

function Resources() {
    return (
        <>
            <Helmet>
                <title>Resources | Verified Sources & Research | Truth in the Air and Water</title>
                <meta name="description" content="Explore trusted sources, scientific studies, news articles, and investigative reports that support the information shared across our site. Everything you need to research chemtrails, water contamination, food toxins, and more — in one place." />
            </Helmet>

            <div className="resources">
                <Header resources='active' />
                <ResourcesComp />
                <Footer resources='active' />
            </div>
        </>
    )
};

export default Resources;