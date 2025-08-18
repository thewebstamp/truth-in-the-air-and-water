import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import Join from "../../components/join/join.jsx";
import images from "../../assets/images.js";
import BlogPage from "../../components/blogPage/blogPage.jsx";
import { Helmet } from 'react-helmet-async';
import GMO from "../../components/gmo/gmo.jsx";

function Blog() {
    const h2 = "Don't Stop Here";
    const p1 = "What you just read is only the surface. There's far more going on — and much of it is hidden in plain sight. If you're ready to go deeper, don't wait for the mainstream to tell you. Stay informed, take control of what goes into your body, and join a growing community asking the right questions.";
    const a1 = "Subscribe to Newsletter";
    const a2 = "Explore Resources";
    const link2 = "/resources";
    const href = "#newsletter";

    return (
        <>
            <Helmet>
                <title>Blog | Bill Gates, GMOs, and Africa’s Food Future: The Hidden Agenda</title>
                <meta name="description" content="Bill Gates’ push for GMO seeds in Africa raises serious concerns about food control, health risks, and hunger. Discover the hidden agenda behind the GMO campaign and why Africa’s food sovereignty matters." />
            </Helmet>

            <div className="blog-section">
                <Header blog='active' />
                <GMO />
                <BlogPage />
                <Join image={images.search} h2={h2} p1={p1} a1={a1} a2={a2} href={href} link2={link2} />
                <Footer blog='active' />
            </div>
        </>
    )
};

export default Blog;