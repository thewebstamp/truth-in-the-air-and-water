import './join.css';
import { useNavigate } from 'react-router-dom';

function Join({image, h2, p1, p2, a1, a2, link1, link2, href}) {
    const navigate = useNavigate();

    return (
        <section>
            <div className="join">
                <div className="join-top">
                    <h2>{h2}</h2>
                    <p dangerouslySetInnerHTML={{ __html: p1 }} />
                    <p>{p2}</p>
                    <div className="join-btn">
                        <a onClick={() => {navigate(link1)}} href={href}>{a1}</a>
                        <a onClick={() => {navigate(link2)}} href='#'>{a2}</a>
                    </div>
                </div>
                <img src={image} alt="" />
            </div>
        </section>
    )
}

export default Join