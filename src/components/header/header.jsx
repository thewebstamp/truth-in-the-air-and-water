import './header.css';
import images from '../../assets/images.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header({home, chemtrails, food, water, blog, resources}) {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const showMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='header-container'>
            <div className="header">
                <a href="#"><img onClick={() => {navigate('/')}} src={images.logo} alt="Truth in the Air and Water Logo" className="logo" /></a>
                <nav >
                    <ul className={menuOpen ? "show-menu" : ""}>
                        <li className={home} onClick={() => { navigate('/') }}><a href="#">Home</a></li>
                        <li className={chemtrails} onClick={() => { navigate('/chemtrails') }}><a href="#">Chemtrails</a></li>
                        <li className={food} onClick={() => { navigate('/food') }}><a href="#">Food</a></li>
                        <li className={water} onClick={() => { navigate('/water') }}><a href="#">Water</a></li>
                        <li className={blog} onClick={() => { navigate('/blog') }}><a href="#">Blog</a></li>
                        <li className={resources} onClick={() => { navigate('/resources') }}><a href="#">Resources</a></li>
                    </ul>
                </nav>
                <button onClick={showMenu} id="menu-toggle" className={`menu-toggle ${menuOpen ? 'open' : ''}`}>
                    <span className="hamburger-menu"></span>
                </button>
            </div>
        </header>
    )
};

export default Header;