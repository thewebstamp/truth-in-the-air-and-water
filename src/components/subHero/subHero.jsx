import './subHero.css';

function SubHero({heroH2, heroP, heroP2, seo, heroImg, sHClass}) {

    return (
        <div className="sub-hero">
            <div className="sub-hero-text">
                <h2>{heroH2}</h2>
                <p>{heroP}</p>
                <p>{heroP2}</p>
            </div>

            <div className={sHClass}>
                <img src={heroImg} alt={seo} />
            </div>
        </div>
    )
};

export default SubHero;