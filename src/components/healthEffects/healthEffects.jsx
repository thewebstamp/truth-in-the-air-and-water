import ImageCollage from '../imageCollage/imageCollage.jsx';
import './healthEffects.css';
import { FaLungs, FaBrain, FaTint, FaLeaf, FaChild } from 'react-icons/fa';

const healthIssues = [
    {
        icon: <FaLungs className="icon" />,
        title: 'Respiratory Issues',
        description: 'Asthma, chronic coughing, and other breathing problems are linked to prolonged exposure.'
    },
    {
        icon: <FaBrain className="icon" />,
        title: 'Neurological Symptoms',
        description: 'Reports show spikes in brain fog, memory loss, and anxiety in affected areas.'
    },
    {
        icon: <FaTint className="icon" />,
        title: 'Autoimmune Disorders',
        description: 'Exposure to heavy metals and toxins has been linked to rising rates of autoimmune diseases.'
    },
    {
        icon: <FaLeaf className="icon" />,
        title: 'Contaminated Ecosystems',
        description: 'Soil and water pollution disrupts the food chain, making clean nutrition harder to access.'
    },
    {
        icon: <FaChild className="icon" />,
        title: 'Vulnerable Groups at Risk',
        description: 'Children, the elderly, and those with compromised immune systems are especially susceptible.'
    }
];

function HealthEffects() {
    return (
        <section>
            <div className="health-effects">
                <div className="health-wrapper">
                    <h2>Invisible Toxins, Real Consequences</h2>
                    <p>Behind the clear blue sky lies a cocktail of chemicals affecting our health. The impact of these airborne pollutants is far from speculative — it’s happening now, and the consequences are serious.</p>

                    <div className="effects-grid">
                        {healthIssues.map((item, index) => (
                            <div key={index} className="effect-item">
                                {item.icon}
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HealthEffects;
