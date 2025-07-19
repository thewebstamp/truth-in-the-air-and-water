import "./waterContaminants.css";
import { FaVial, FaFlask, FaBiohazard, FaSkullCrossbones, FaTint } from "react-icons/fa";

const contaminants = [
  {
    icon: <FaVial className="icon" />,
    title: "Fluoride",
    description: "Still added to tap water in many cities, despite links to neurotoxicity and thyroid disruption."
  },
  {
    icon: <FaFlask className="icon" />,
    title: "Chlorine & Chloramine",
    description: "Used to disinfect water, but can create toxic byproducts and irritate the skin and lungs."
  },
  {
    icon: <FaBiohazard className="icon" />,
    title: "PFAS (Forever Chemicals)",
    description: "Synthetic compounds found in firefighting foams and non-stick products — toxic, persistent, and everywhere."
  },
  {
    icon: <FaSkullCrossbones className="icon" />,
    title: "Heavy Metals",
    description: "Lead, arsenic, and mercury can leach from old pipes or industrial runoff — even at low levels, they’re dangerous."
  },
  {
    icon: <FaTint className="icon" />,
    title: "Pharmaceutical Residue",
    description: "Antibiotics, hormones, and antidepressants have been detected in treated water supplies."
  }
];

const WaterContaminants = () => {
  return (
    <section className="water-contaminants-section">
      <h2>What’s Really In Your Water?</h2>
      <p>
        From lead and chlorine to pharmaceutical residues and PFAS, your tap water carries contaminants with well-documented health risks. And you’re drinking it daily.
      </p>
      <div className="contaminants-grid">
        {contaminants.map((item, index) => (
          <div className="contaminant-item" key={index}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WaterContaminants;
