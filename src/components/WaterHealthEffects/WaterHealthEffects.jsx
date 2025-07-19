import React from "react";
import "./waterHealthEffects.css";
import { FaLungs, FaBrain, FaChild, FaDisease, FaExclamationTriangle } from "react-icons/fa";

const healthEffects = [
  {
    icon: <FaLungs className="icon" />,
    title: "Respiratory Irritation",
    description: "Chlorine byproducts can trigger asthma, allergic reactions, and chronic lung conditions."
  },
  {
    icon: <FaBrain className="icon" />,
    title: "Neurological Impact",
    description: "Heavy metals like lead and fluoride affect memory, learning, and brain development."
  },
  {
    icon: <FaDisease className="icon" />,
    title: "Long-Term Illness",
    description: "Arsenic, PFAS, and other contaminants raise the risk of cancers, hormonal imbalances, and organ failure."
  },
  {
    icon: <FaChild className="icon" />,
    title: "Sensitive Groups at Risk",
    description: "Infants, pregnant women, and elders are especially vulnerable to contaminated water exposure."
  },
  {
    icon: <FaExclamationTriangle className="icon" />,
    title: "Delayed Symptoms",
    description: "Toxic exposure builds over time — symptoms often show up when the damage is already done."
  }
];

const WaterHealthEffects = () => {
  return (
    <section className="water-health-effects-alt">
      <div className="container">
        <h2>You drink it, cook with it, and bathe in it — but what if your water is poisoning you?</h2>
        <p>
          Laced with heavy metals, hormone disruptors, and cancer-linked chemicals, most tap water isn’t just dirty — it’s dangerous. The damage doesn’t always show immediately, but make no mistake: the health consequences are real and serious.
        </p>

        <div className="effects-list">
          {healthEffects.map((item, index) => (
            <div className="effect-card" key={index}>
              <div className="effect-icon">{item.icon}</div>
              <div className="effect-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterHealthEffects;