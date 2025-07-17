import './what.css';

function What({whatH2, whatP1, whatP2, whatImg}) {
    return (
        <section>
            <div className="what">
                <div className="what-text">
                    <h2>{whatH2}</h2>
                    <p>{whatP1}</p>
                    <p>{whatP2}</p>
                </div>
                <img src={whatImg} alt="" />
            </div>
        </section>
    )
};

export default What;