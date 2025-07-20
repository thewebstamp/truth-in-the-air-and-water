import { useNavigate } from 'react-router-dom';
import './blogP.css';
import images from '../../assets/images';

function BlogP() {
    const navigate = useNavigate();
    const blogCards = [
        {
            title: "Inside the Chemtrail Cover-Up",
            date: "July 11, 2025",
            image: images.blog,
            id: "#chemtrail-one"
        },
        {
            title: "What’s Really in Your Tap Water?",
            date: "July 11, 2025",
            image: images.water1,
            id: "#water-one"
        },
        {
            title: "The Hidden Toxins in Everyday Food",
            date: "July 11, 2025",
            image: images.toxins,
            id: "#food-one"
        },
        {
            title: "How Farming Chemicals End Up in Your Body",
            date: "July 11, 2025",
            image: images.food2,
            id: "#food-two"
        },
        {
            title: "Clouded Truth: The Science and Secrecy of Aerosol Trails",
            date: "July 11, 2025",
            image: images.chemtrail2,
            id: "#chemtrail-two"
        },
        {
            title: "Tapping the Unknown: What’s Really in Your Bottled Water?",
            date: "July 11, 2025",
            image: images.water2,
            id: "#water-two"
        }
    ];

    return (
        <section>
            <div className="blog">
                <div className="blog-top">
                    <h2>Featured Stories</h2>
                    <p>Explore real reports and investigations into what’s affecting our health and environment — with sources you can verify for yourself.</p>
                </div>

                <div className="blog-base">
                    <img className='blog-base-img' src={images.chemtrail1} alt="" />
                    <div className="blog-cards">
                        {
                            blogCards.map((card, i) => (
                                <div key={i} onClick={() => navigate(`/blog${card.id}`)} className="b-card">
                                    <div className='a'>
                                        <img src={card.image} alt="" />
                                        <div className="card-info">
                                            <h3>{card.title}</h3>
                                            <p>{card.date}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};

export default BlogP;