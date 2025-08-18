import './gmo.css';
import images from '../../assets/images';

export default function GMO() {
  return (
    <div className="blog-gmo-container">
      <h2>Bill Gates, GMOs, and Africa: Progress or Hidden Agenda?</h2>
      <p>
        Bill Gates, through projects like AGRA, promotes GMO crops such as drought-tolerant maize and virus-resistant cassava, selling them as answers to hunger and climate change. Yet research has linked GMO consumption to risks like allergies, organ damage, and weakened immunity. African farmers report little to no yield gains, and evidence shows GMOs can worsen hunger, damage soil, and pose serious health risks—proving they are not the solution, but a problem.
      </p>

      <div className="blog-gmo-image">
        <img
          src={images.gate}
          alt="Bill Gates speaking"
        />
        <p className="img-gmo-caption">Bill Gates promoting “innovation” in agriculture - An Hidden Agenda.</p>
      </div>

      <h3>The Dangers of GMO Agriculture</h3>
      <ul>
        <li>
          <strong>Seed Dependency:</strong> Farmers can’t save patented seeds—
          they must buy them every season.
        </li>
        <li>
          <strong>Biodiversity Loss:</strong> Local seeds, adapted for centuries,
          are being replaced.
        </li>
        <li>
          <strong>Health Concerns:</strong> Studies link GMO to allergies, antibiotic resistance, and potential long-term effects that remain unknown.
        </li>
        <li>
          <strong>Chemical Reliance:</strong> Many GMOs demand heavy pesticide
          and herbicide use which is poisonous and unhealthy
        </li>
      </ul>

      <div className="blog-gmo-image">
        <img
          src={images.danger}
          alt="GMO warning sign"
        />
        <p className="img-gmo-caption">Critics warn GMOs pose health and environmental risks.</p>
      </div>

      <h3>The Hidden Agenda?</h3>
      <p>
        Behind the promises of higher yields and ‘feeding Africa,’ Bill Gates and corporate-backed GMO projects are tightening control over African agriculture. This isn’t just about food—it’s about power. By pushing patented seeds and chemical dependency, they create a system where farmers lose independence and communities face health risks.
      </p>

      <h3>Farmers Speak Out</h3>
      <p>
        In Zimbabwe, three out of four farmers said GM crops are “too risky.”
        Across the continent, traditional farmers fear losing independence and
        the seed heritage passed down through generations.
      </p>

      <div className="blog-gmo-image">
        <img
          src={images.nogmo}
          alt="African farmer in field"
        />
      </div>

      <p>
        Africa doesn’t need corporate organizations controlling its food. This is just another form of colonialism that interferes with the natural genetics of our healthy crops. Africa should maintain it's seed sovereignty and community-driven farming that protects both people and the land.
      </p>

      <h3>Conclusion: Africa at a Crossroads</h3>
      <p>
        Bill Gates’ GMO crusade may look humanitarian, but beneath the surface
        it risks handing Africa’s food future to corporations. True food
        security means empowering farmers, protecting biodiversity, and keeping
        control in African hands—not in Silicon Valley boardrooms.
      </p>
    </div>
  );
}