import "./foodContamination.css";
import { FaBan, FaCarrot, FaRecycle, FaSearch } from "react-icons/fa";

const foodSolutions = [
  {
    icon: <FaBan className="icon" />,
    title: "Avoid the Worst Offenders",
    description:
      "Cut out ultra-processed foods, artificial additives, and products with ingredient lists you can’t pronounce."
  },
  {
    icon: <FaCarrot className="icon" />,
    title: "Eat Clean & Whole",
    description:
      "Choose organic produce, pasture-raised meat, and foods in their most natural state — free from industrial interference."
  },
  {
    icon: <FaRecycle className="icon" />,
    title: "Support Local & Regenerative",
    description:
      "Buy from farmers’ markets and local growers who value soil health, sustainability, and toxin-free practices."
  },
  {
    icon: <FaSearch className="icon" />,
    title: "Read Labels Relentlessly",
    description:
      "Knowledge is protection — learn to identify hidden chemicals, preservatives, and misleading health claims."
  }
];

const FoodContamination = () => {
  return (
    <section className="food-contamination-section">
      <h2>Toxic Plates, Smarter Choices</h2>
      <p>
        The solution isn’t fear — it’s awareness. Food toxins are everywhere, but so are better options. 
        With the right knowledge, you can take back control of your diet, support your body’s healing, and 
        protect your health one decision at a time.
      </p>
      <div className="food-grid">
        {foodSolutions.map((item, index) => (
          <div className="food-item" key={index}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodContamination;
