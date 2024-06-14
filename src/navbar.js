import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary ">
                <div className="container">
                    <Link className="navbar-brand text-light mx-4" to="/">News<b>WEB</b>.com</Link>
                   
                    <div className="collapse  navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4"><Link className="nav-link text-light" to="/Business">Business</Link></li>

                            <li className="nav-item mx-4"><Link className="nav-link text-light" to="/Entertainment">Entertainment</Link></li>

                            <li className="nav-item mx-4"><Link className="nav-link text-light" to="/General">General</Link></li>

                            <li className="nav-item mx-4"><Link className="nav-link text-light" to="/Health">Health</Link></li>

                            <li className="nav-item mx-4"><Link className="nav-link text-light" to="/Science">Science</Link></li>

                            <li className="nav-item mx-4"><Link className="nav-link text-light" to="/Sports">Sports</Link></li>

                            <li className="nav-item mx-4"><Link className="nav-link text-light" to="/Technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
