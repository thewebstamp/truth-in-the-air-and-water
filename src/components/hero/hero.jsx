import './hero.css';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/images.js';

function Hero() {
    const navigate = useNavigate();

    return (
        <section>
            <div className="hero">
                <div className="text-overlay">
                    <div className="hero-text">
                        <div className="name">TRUTH IN THE AIR & WATER</div>
                        <h1>Exposing Hidden Dangers in Our Skies, Food & Water</h1>
                        <p>Every day, we're exposed to invisible threats — from chemical trails overhead to toxins hiding in our food and water. We're here to shine a light on what’s being ignored and empower you with the truth.</p>
                        <a href="#">
                            <button className='hero-btn' onClick={() => { navigate('/chemtrails') }}>Learn the Truth</button>
                        </a>
                    </div>
                </div>

                <div className="hero-collage">
                    <img className='hImg-first' src={images.food} alt="food" />
                    <img className='hImg-second' src={images.water} alt="water" />
                    <img className='hImg-third' src={images.chemtrails} alt="chemtrails" />
                </div>
            </div>
        </section>
    )
};

export default Hero;