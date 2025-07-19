import './footer.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import images from '../../assets/images.js';

function Footer({ home, chemtrails, food, water, blog, resources }) {
    const navigate = useNavigate();

    return (
        <footer>
            <div className="footer">
                <div className="footer-top">
                    <div className="f-first">
                        <div className="f-mission-t">
                            <a href="#">
                                <img onClick={() => { navigate('/') }} src={images.logo} alt="Truth in the Air and Water Logo" />
                            </a>
                            <h3>Truth in the Air & Water</h3>
                        </div>
                        <p className="f-mission-b">A public awareness initiative focused on uncovering silent dangers in our environment — from chemtrails in the skies to toxins in our food and water. Our mission is to educate, inform, and empower individuals to question mainstream narratives, seek cleaner alternatives, and take action for their health and the planet. Truth isn’t a theory — it’s a responsibility.</p>
                    </div>

                    <form className="f-second" id='newsletter'>
                        <h3>Newsletter</h3>
                        <p className="newsletter-text">Subscribe to receive and view our latest updates</p>
                        <div className="subcription-box">
                            <input type='email' id='email' name='user-email' placeholder='Enter email' autoComplete='email' required />
                            <button><FontAwesomeIcon className='paperplane' icon={faPaperPlane} /></button>
                        </div>
                        <div className="social-icons">
                            <a href=""><FontAwesomeIcon className='facebook' icon={faFacebookF} /></a>
                        </div>
                    </form>

                    <div className="f-third">
                        <h3>Nav Links</h3>
                        <ul>
                            <li onClick={() => { navigate('/') }} className={home}><a href="#">Home</a></li>
                            <li onClick={() => { navigate('/chemtrails') }} className={chemtrails}><a href="#">Chemtrails</a></li>
                            <li onClick={() => { navigate('/food') }} className={food}><a href="#"> Food</a></li>
                            <li onClick={() => { navigate('/water') }} className={water}><a href="#">Water</a></li>
                            <li onClick={() => { navigate('/blog') }} className={blog}><a href="#">Blog</a></li>
                            <li onClick={() => { navigate('/resources') }} className={resources}><a href="#">Resources</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-base">
                    <p className="copyright">&copy; {new Date().getFullYear()} Truth in the Air and Water. All rights reserved.</p>
                    <p className="disclaim">All logos, trademarks, and copyrights displayed on this website are the property of their respective owners. Use of these materials does not imply endorsement by these companies. No licenses or other rights to such logos and/or trademarks are granted.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;