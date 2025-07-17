import './truth.css';
import images from '../../assets/images';

function Truth() {
    return (
        <section>
            <div className="truth">
                <div className="truth-text">
                    <div className="headline">WHY TRUTH MATTERS</div>
                    <h2>They Say It’s Safe. We Ask: Is It?</h2>
                    <p>In a world flooded with distractions, silence, and misinformation, truth becomes more than a principle — it becomes a form of resistance. We believe that seeking answers, questioning authority, and demanding transparency are not radical—they're necessary. Because when people know what’s really going on, they can choose better. They can act.</p>
                </div>
                <div className="truth-img">
                    <img src={images.truth} alt="" />
                    <div className="img-style"></div>
                </div>
            </div>
        </section>
    )
};

export default Truth;