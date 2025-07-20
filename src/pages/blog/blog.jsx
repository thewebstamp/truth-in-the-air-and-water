import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import Join from "../../components/join/join.jsx";
import images from "../../assets/images.js";
import BlogPage from "../../components/blogPage/blogPage.jsx";

function Blog() {
    const h2 = "Don't Stop Here";
    const p1 = "What you just read is only the surface. There's far more going on — and much of it is hidden in plain sight. If you're ready to go deeper, don't wait for the mainstream to tell you. Stay informed, take control of what goes into your body, and join a growing community asking the right questions.";
    const a1 = "Subscribe to Newsletter";
    const a2 = "Explore Resources";
    const link2 = "/resources";
    const href = "#newsletter";

    return (
        <div className="blog-section">
            <Header blog='active' />
            <BlogPage />
            <Join image={images.search} h2={h2} p1={p1} a1={a1} a2={a2} href={href} link2={link2} />
            <Footer blog='active' />
        </div>
    )
};

export default Blog;