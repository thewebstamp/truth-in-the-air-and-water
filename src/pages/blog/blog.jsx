import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import Join from "../../components/join/join.jsx";
import images from "../../assets/images.js";
import Progress from "../../components/progress/progress.jsx";

function Blog() {
    return (
        <div className="blog-section">
            <Header blog='active' />
            <Progress message="Page developement in progress." />
            <Join image={images.drinkWater} />
            <Footer blog='active' />
        </div>
    )
};

export default Blog;