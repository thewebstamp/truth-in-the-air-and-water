import "./blogPage.css";
import images from "../../assets/images";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const blogs = [
  {
    title: "Inside the Chemtrail Cover-Up",
    date: "July 11, 2025",
    image: images.blog,
    content: `Former airline technician James W. came forward after 20 years of silence. He described covert chemical loading practices at a major U.S. airport, claiming he was ordered never to ask questions. Independent researchers have since captured lab samples of unusual particles falling after high-altitude jet flyovers. Are these the chemtrails many dismiss as conspiracy? Increasingly, whistleblowers and atmospheric experts say yes.`,
    sources: ["https://www.geoengineeringwatch.org"],
    id: "chemtrail-one"
  },
  {
    title: "What’s Really in Your Tap Water?",
    date: "July 11, 2025",
    image: images.water1,
    content: `In 2024, a family in Flint, Michigan, discovered dangerously high levels of lead and PFAS in their supposedly "treated" water. Their 7-year-old began showing signs of developmental delays. It turns out the city’s water testing procedures were flawed, hiding deeper contamination. If it happened in Flint — could it be happening elsewhere? Studies suggest yes.`,
    sources: ["https://www.ewg.org/tapwater"],
    id: "water-one"
  },
  {
    title: "The Hidden Toxins in Everyday Food",
    date: "July 11, 2025",
    image: images.toxins,
    content: `From high-fructose corn syrup to aspartame and Red 40, many ingredients in our food are banned in other countries. U.S. food policy allows additives with known links to behavioral disorders and cancer. Nutritionist Kelly Saunders calls them "profit poisons" — cheap to use, but costly to your health.`,
    sources: ["https://www.centerforfoodsafety.org"],
    id: "food-one"
  },
  {
    title: "How Farming Chemicals End Up in Your Body",
    date: "July 11, 2025",
    image: images.food2,
    content: `Pesticides like atrazine and glyphosate aren’t just on the crops — they’re in our bloodstream. Blood tests from rural communities in Iowa and Indiana show elevated levels of these endocrine-disrupting chemicals, even in newborns. Farmers and their families are the first victims, but grocery store shoppers are next.`,
    sources: ["https://www.nrdc.org"],
    id: "food-two"
  },
  {
    title: "Clouded Truth: The Science and Secrecy of Aerosol Trails",
    date: "July 11, 2025",
    image: images.chemtrail2,
    content: `Harvard's geoengineering program and DARPA's atmospheric experiments remain under tight wraps. Yet patents for aerosol dispersion from aircraft date back decades. What are these operations really doing? A 2022 FOIA request revealed partially redacted emails discussing “stratospheric dispersal simulations" — without public knowledge or consent.`,
    sources: ["https://www.geoengineeringwatch.org", "https://climateviewer.org"],
    id: "chemtrail-two"
  },
  {
    title: "Tapping the Unknown: What’s Really in Your Bottled Water?",
    date: "July 11, 2025",
    image: images.water2,
    content: `A 2023 Consumer Reports investigation tested 47 brands of bottled water — over 60% contained microplastics, and some even contained arsenic above safe levels. "It’s just filtered tap water with a fancy label," says toxicologist Dr. Maria Chen. The bottled water industry thrives on illusion, not purity.`,
    sources: ["https://www.consumerreports.org"],
    id: "water-two"
  }
];

const BlogPage = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay ensures DOM is ready
      }
    }
  }, [location]);

  return (
    <div className="blog-page">
      <h2>Explore the Truth</h2>
      <p className="intro">
        Real people. Real stories. Real science. Here’s what they’re not telling you about your air, food, and water.
      </p>

      {blogs.map((post, index) => (
        <div className="blog-post" key={index} id={post.id}>
          <img src={post.image} alt={post.title} className="blog-image" />
          <div className="blog-content">
            <h3>{post.title}</h3>
            <p className="date">{post.date}</p>
            <p className="text">{post.content}</p>
            {post.sources && (
              <div className="sources">
                <strong>Sources:</strong>
                <ul>
                  {post.sources.map((url, i) => (
                    <li key={i}><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
