import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import Join from "../../components/join/join.jsx";
import images from "../../assets/images.js";
import { Helmet } from 'react-helmet-async';
import SubHero from "../../components/subHero/subHero.jsx";
import What from "../../components/what/what.jsx";
import Sky from "../../components/sky/sky.jsx";
import HealthEffects from "../../components/healthEffects/healthEffects.jsx";
import ImageCollage from "../../components/imageCollage/imageCollage.jsx";

function Chemtrails() {
    const heroH2 = "Chemtrails Are Real — And They're Harming Us";
    const heroP = "These aren't ordinary contrails. The persistent trails you're seeing in the sky contain chemical compounds designed to manipulate the weather, disrupt ecosystems, and expose the population to toxic elements. This isn't speculation — it's happening, and it's time the truth came to light.";
    const seo = "Interlacing chemtrails above a suburban skyline";
    const sHClass = "sub-hero-image";
    const heroImg = images.chemT1;
    const whatH2 = "What Are Chemtrails?";
    const whatP1 = "Chemtrails, short for “chemical trails,” are not just vaporized condensation like traditional jet contrails. They are long-lasting, grid-like formations left behind by high-altitude aircraft — and they don’t behave like normal clouds. These trails linger for hours, spread unnaturally, and eventually form hazy, synthetic cloud cover.";
    const whatP2 = "Independent researchers, whistleblowers, and scientists have raised serious concerns about what’s actually being sprayed — including heavy metals like aluminum, barium, and strontium. These compounds are linked to respiratory illnesses, soil degradation, and atmospheric manipulation under secretive geoengineering programs.";
    const h2 = "Toxic Skies: The Dangerous Mix Falling on Us";
    const p1 = `What’s being sprayed isn’t just condensation. Independent lab tests and insider reports reveal a <b>toxic brew</b> of <b>aluminum</b>, <b>barium</b>, <b>strontium</b>, <b>nanometals</b>, and even <unidentified biological agents. These substances don’t belong in our air — yet they <fall over our communities daily. They <b>poison our soil</b>, <b>threaten our health</b>, and <b>alter the environment</b>. This isn’t a theory — it’s a crisis we’re meant to ignore.`;
    const p2 = "We don’t just ask you to believe — we urge you to verify. The data, the sources, and the evidence are all there. See it for yourself, and you’ll know this isn’t theory — it’s truth.";
    const a1 = "Truth About Our Food";
    const a2 = "Truth About Our Water";
    const link1 = "/food";
    const link2 = "/water";
    const href = "#";

    return (
        <>
            <Helmet>
                <title>Chemtrails: What’s Being Sprayed and Why It Matters | Truth in the Air and Water</title>
                <meta name="description" content="Explore the truth behind chemtrails. Learn about their composition, health risks, and the evidence pointing to deliberate atmospheric spraying." />
            </Helmet>

            <div className="chemtrails">
                <Header chemtrails='active' />
                <SubHero sHClass={sHClass} heroH2={heroH2} heroImg={heroImg} heroP={heroP} seo={seo} />
                <What whatH2={whatH2} whatP1={whatP1} whatP2={whatP2} whatImg={images.chemT2} />
                <Sky />
                <ImageCollage id='chemtrails-page-img' iCClass1="chemT-collage1" iCClass2="chemT-collage2" iCImg1={images.chemtrails} iCImg2={images.chemT3} />
                <HealthEffects />
                <Join image={images.chemtrail2} h2={h2} p1={p1} p2={p2} href={href} a1={a1} a2={a2} link1={link1} link2={link2} />
                <Footer chemtrails='active' />
            </div>
        </>
    )
};

export default Chemtrails;