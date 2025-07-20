import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import images from "../../assets/images.js";
import Join from "../../components/join/join.jsx";
import { Helmet } from 'react-helmet-async';
import SubHero from "../../components/subHero/subHero.jsx";
import ToxicIngredients from "../../components/toxicIngredients/toxicIngredients.jsx";
import FoodContamination from "../../components/foodContamination/foodContamination.jsx";
import What from "../../components/what/what.jsx";
import ImageShowcase from "../../components/foodImage/imageShowcase.jsx";

function Food() {
    const heroH2 = "What’s Really on Your Plate?";
    const heroP2 = "It’s time to expose what’s really on your plate — and how it’s affecting your health.";
    const heroP = "Our food supply is under attack. From hidden toxins and synthetic chemicals to genetically modified organisms and pesticide residues — the food we eat is no longer safe by default.";
    const seo = "Toxins in our food";
    const heroImg = images.fPage1;
    const sHClass = "sub-hero-image2";
    const whatH2 = "What They Don’t Tell You on the Label";
    const whatp1 = "Food labels often hide more than they reveal. Terms like “natural flavoring,” “low-fat,” or “sugar-free” can mask dangerous additives, artificial sweeteners, and lab-made chemicals. Many ingredients are disguised with scientific names or grouped under vague labels, keeping consumers unaware of what they’re really eating. Even serving sizes are manipulated to downplay harmful content. The truth? What appears healthy may be hiding toxic elements that harm our bodies over time.";
    const whatImg = images.betterChoice;
    const h2 = "Awareness is the First Step Toward Change";
    const p1 = "The food system isn’t broken — it’s working exactly as designed: to maximize profit, not health. But you don’t have to play along. Educate yourself. Prioritize whole, organic foods. Support local farmers. Read labels, question marketing, and push back against the industries profiting from silence. Your fork is your first tool in the fight for truth, health, and autonomy.";
    const a1 = "Truth In The Air";
    const a2 = "Truth In Water";
    const link1 = "/chemtrails";
    const link2 = "/water";
    const href = "#";

    return (
        <>
            <Helmet>
                <title>What’s In Our Food? | Exposing Hidden Dangers in the Modern Food Supply</title>
                <meta name="description" content="Discover what’s really in your food — from GMOs and pesticides to synthetic additives and toxins. Learn how these hidden ingredients are affecting your health and what you can do to protect yourself." />
            </Helmet>

            <div className="food">
                <Header food='active' />
                <SubHero sHClass={sHClass} heroH2={heroH2} heroImg={heroImg} heroP={heroP} heroP2={heroP2} seo={seo} />
                <ToxicIngredients />
                <ImageShowcase imgShow1={images.fertilizer} imgShow2={images.fertilizer} />
                <What whatH2={whatH2} whatP1={whatp1} whatImg={whatImg} />
                <FoodContamination />
                <Join image={images.food2} h2={h2} p1={p1} href={href} a1={a1} a2={a2} link1={link1} link2={link2} />
                <Footer food='active' />
            </div>
        </>
    )
};

export default Food;