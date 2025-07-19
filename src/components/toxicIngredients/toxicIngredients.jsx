import "./toxicIngredients.css";
import { FaFlask, FaSyringe, FaDna, FaSkullCrossbones, FaTint, FaBurn } from "react-icons/fa";

const ToxicIngredients = () => {
    const ingredients = [
        {
            icon: <FaFlask />,
            title: "Glyphosate",
            description: "A common herbicide linked to cancer — found in grains, cereals, and produce.",
        },
        {
            icon: <FaBurn />,
            title: "High-Fructose Corn Syrup",
            description: "Promotes obesity, insulin resistance, and liver stress in processed foods.",
        },
        {
            icon: <FaDna />,
            title: "Artificial Sweeteners",
            description: "Disrupt gut bacteria and may increase sugar cravings and neurological symptoms.",
        },
        {
            icon: <FaSkullCrossbones />,
            title: "Synthetic Preservatives",
            description: "Chemicals like BHA/BHT accumulate in the body and are suspected carcinogens.",
        },
        {
            icon: <FaTint />,
            title: "Food Dyes",
            description: "Additives like Red 40 have been linked to hyperactivity and behavioral issues in children.",
        },
        {
            icon: <FaSyringe />,
            title: "Hormones & Antibiotics",
            description: "Used in meat & dairy production — contribute to resistance and hormonal imbalances.",
        },
    ];

    return (
        <section className="toxic-section">
            <h2>Toxic Ingredients in Plain Sight</h2>
            <p className="section-intro">
                Many everyday foods are hiding toxic chemicals behind friendly labels. From preservatives and dyes to hormone-laced meats, these ingredients are slowly degrading our health. Understanding what you eat is the first step to protecting yourself and your loved ones.
            </p>
            <div className="toxic-grid">
                {ingredients.map((item, index) => (
                    <div className="toxic-card" key={index}>
                        <div className="icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ToxicIngredients;