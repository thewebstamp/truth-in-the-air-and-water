import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import images from "../../assets/images.js";
import Join from "../../components/join/join.jsx";
import { Helmet } from 'react-helmet-async';
import SubHero from "../../components/subHero/subHero.jsx";
import Progress from "../../components/progress/progress.jsx";

function Food() {
    const heroH2 = "What’s Really on Your Plate?";
    const heroP = "This page exposes the hidden ingredients, industry secrets, and health risks behind the food on your table.";
    const heroP2 = "From toxic additives to genetically modified crops, our food is being manipulated in ways most people never realize. What you eat is silently shaping your health—and not for the better.";
    const seo = "Interlacing chemtrails above a suburban skyline";
    const heroImg = images.fPage1;
    const sHClass = "sub-hero-image2"

    return (
        <>
            <Helmet>
                <title>Chemtrails: What’s Being Sprayed and Why It Matters | Truth in the Air and Water</title>
                <meta name="description" content="Explore the truth behind chemtrails. Learn about their composition, health risks, and the evidence pointing to deliberate atmospheric spraying." />
            </Helmet>

            <div className="food">
                <Header food='active' />
                <SubHero sHClass={sHClass} heroH2={heroH2} heroImg={heroImg} heroP={heroP} heroP2={heroP2} seo={seo} />
                <Progress message="I am currently working on this page." />
                <Join image={images.food2} />
                <Footer food='active' />
            </div>
        </>
    )
};

export default Food;