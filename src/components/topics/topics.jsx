import './topics.css';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/images.js';

function Topics() {
    const navigate = useNavigate();
    const cards = [
        {
            topic: "Chemtrails 🛩️",
            description: "What’s really being sprayed in our skies? Uncover the patterns, patents, and purposes behind aerial chemical dispersal that mainstream science won’t address.",
            cta: "/chemtrails",
            img: images.chemtrailsAwareness,
            className: "first-card card-text"
        },
        {
            topic: "Toxins in Food 🍽️",
            description: "From GMOs to pesticides, today’s food supply hides a cocktail of chemicals. Learn how to spot the worst offenders and choose cleaner, safer options.",
            cta: "/food",
            img: images.foodToxins,
            className: "second-card card-text"
        },
        {
            topic: "Water Contamination 🚰",
            description: "Fluoride, heavy metals, and microplastics — our tap water isn’t as clean as we’re told. Understand what’s in it and how to protect yourself.",
            cta: "/water",
            img: images.waterContamination,
            className: "third-card card-text"
        }
    ];

    return (
        <section>
            <div className="topics">
                <div className="topics-top">
                    <div className="title">WHAT THEY'RE NOT TELLING YOU</div>
                    <h2>Explore The Hidden Hazards In Our Skies, Food, & Water — And How They May Be <span>Impacting Your Health & Freedom.</span></h2>
                </div>

                <div className="topics-base">
                    {
                        cards.map((card, i) => (
                            <div key={i} className='card'>
                                <img src={card.img} alt="" />
                                <div className={card.className}>
                                    <h3>{card.topic}</h3>
                                    <p>{card.description}</p>
                                    <a href="#">
                                        <button onClick={() => {navigate(`${card.cta}`)}}>Learn More</button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Topics;