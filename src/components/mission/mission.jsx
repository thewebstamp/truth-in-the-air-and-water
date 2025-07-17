import images from '../../assets/images.js';
import './mission.css';

function Mission() {
    return (
        <section>
            <div className="mission">
                <div className="mission-text">
                    <h2>What If Many Of The Things You Trusted Were Slowly Harming You?</h2>
                    <p>Every day, harmful substances enter our bodies through the air we breathe, the food we eat, and the water we drink. Most people are unaware — and that’s exactly how the system wants it. We’re here to challenge the silence, expose the patterns, and push for change.</p>
                    <p>This isn’t fearmongering. It’s facts being ignored. We believe truth is a responsibility and it begins with awareness.</p>
                </div>
                <img src={images.drinkWater} alt="Truth in the Air and Water Mission" />
            </div>
        </section>
    )
};

export default Mission;