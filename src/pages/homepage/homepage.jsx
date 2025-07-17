import Blog from "../../components/blog/blog.jsx";
import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import Hero from "../../components/hero/hero.jsx";
import Join from "../../components/join/join.jsx";
import Mission from "../../components/mission/mission.jsx";
import Topics from "../../components/topics/topics.jsx";
import Truth from "../../components/truth/truth.jsx";
import images from "../../assets/images.js";
import { Helmet } from 'react-helmet-async';

function Homepage() {
    const h2 = "Your Voice Matters — So Does the Truth.";
    const p1 = "Whether you're just starting your journey or have long suspected something's wrong, Truth in the Air and Water is your hub for connecting the dots. We’re a community built on evidence, curiosity, and the drive to question what we’re told.";
    const p2 = "Don’t take our word for it — do your own digging. Verify everything. Start with our Resources page to explore credible sources, links, and studies behind what we share.";
    const a1 = "Subscribe to Newsletter";
    const a2 = "Explore Resources";
    const link2 = "/resources";
    const href = "#newsletter";

    return (
        <>
            <Helmet>
                <title>Truth in the Air and Water | Awareness on Chemtrails, Food & Water Safety</title>
                <meta name="description" content="Explore the hidden dangers in our skies, food, and water. Truth in the Air and Water is dedicated to raising awareness about chemtrails and toxic exposure affecting our health and environment." />
            </Helmet>

            <div className="homepage">
                <Header home='active' />
                <Hero />
                <Mission />
                <Topics />
                <Truth />
                <Blog />
                <Join image={images.join} h2={h2} p1={p1} p2={p2} a1={a1} a2={a2} href={href} link2={link2} />
                <Footer home='active' />
            </div>
        </>
    )
}

export default Homepage;