import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import Join from "../../components/join/join.jsx";
import images from "../../assets/images.js";
import BlogPage from "../../components/blogPage/blogPage.jsx";

function Blog() {
    const h2 = "Your Voice Matters — So Does the Truth.";
    const p1 = "Whether you're just starting your journey or have long suspected something's wrong, Truth in the Air and Water is your hub for connecting the dots. We’re a community built on evidence, curiosity, and the drive to question what we’re told.";
    const p2 = "Don’t take our word for it — do your own digging. Verify everything. Start with our Resources page to explore credible sources, links, and studies behind what we share.";
    const a1 = "Subscribe to Newsletter";
    const a2 = "Explore Resources";
    const link2 = "/resources";
    const href = "#newsletter";

    return (
        <div className="blog-section">
            <Header blog='active' />
            <BlogPage />
            <Join image={images.drinkWater} h2={h2} p1={p1} p2={p2} a1={a1} a2={a2} href={href} link2={link2} />
            <Footer blog='active' />
        </div>
    )
};

export default Blog;