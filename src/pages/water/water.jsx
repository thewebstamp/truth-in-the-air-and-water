import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import images from "../../assets/images.js";
import Join from "../../components/join/join.jsx";
import { Helmet } from 'react-helmet-async';
import SubHero from "../../components/subHero/subHero.jsx";
import What from "../../components/what/what.jsx";
import WaterContaminants from "../../components/waterContaminants/waterContaminants.jsx";
import WaterHealthEffects from "../../components/WaterHealthEffects/WaterHealthEffects.jsx";
import ImageShowcase from "../../components/foodImage/imageShowcase.jsx";

function Water() {
    const heroH2 = "Clear Doesn’t Mean Clean";
    const heroP = "Water is life — but in today’s world, even life’s most essential element is compromised. Behind the illusion of purity lies a mix of heavy metals, microplastics, chemical runoff, and pharmaceutical waste. It’s time to question what we’re really drinking — and demand better.";
    const seo = "Contaminated water concept";
    const heroImg = images.clear;
    const sHClass = "sub-hero-image2";
    const whatH2 = "Tap Water Isn’t As Safe As You Think";
    const whatP1 = "Municipal water treatment is not designed to give you clean, healthy water — it’s designed to meet minimum legal standards. Chlorine, fluoride, ammonia, and other chemicals are routinely added, while heavy metals, pharmaceuticals, and industrial waste often slip through unchecked.";
    const whatP2 = "What comes out of your faucet may look clear, but that doesn’t mean it’s clean. The system prioritizes compliance, not your health — and that’s a dangerous gamble.";
    const h2 = "Protect Yourself, Reclaim Your Water";
    const p1 = "Clean water should be a right — not a gamble. Don’t wait for authorities to act — take control of what flows into your body. From quality filtration systems to independent water testing, your defense starts with awareness and action. The more you know, the better you can protect your family and your future.";
    const a1 = "Truth About Our Food";
    const a2 = "Truth In The Air";
    const link1 = "/food";
    const link2 = "/chemtrails";
    const href = "#";

    return (
        <>
            <Helmet>
                <title>What’s In Our Water? | Uncovering the Contaminants in Your Tap</title>
                <meta name="description" content="Explore the hidden toxins in our water supply — from heavy metals and pharmaceuticals to fluoride and industrial chemicals. Understand how they affect your health and discover steps to protect yourself." />

            </Helmet>

            <div className="water">
                <Header water='active' />
                <SubHero sHClass={sHClass} heroH2={heroH2} heroImg={heroImg} heroP={heroP} seo={seo} />
                <What whatH2={whatH2} whatP1={whatP1} whatP2={whatP2} whatImg={images.water} />
                <WaterContaminants />
                <ImageShowcase imgShow1={images.cook} imgShow2={images.cook} />
                <WaterHealthEffects />
                <Join image={images.water2} h2={h2} p1={p1} href={href} a1={a1} a2={a2} link1={link1} link2={link2} />
                <Footer water='active' />
            </div>
        </>
    )
};

export default Water;