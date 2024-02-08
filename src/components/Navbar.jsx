import React, { useEffect, useState } from 'react'
import whiteLogo from '../assets/lejhro_logo_white.png';
import Sidebar from './Sidebar';


const Navbar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsCollapsed(window.innerWidth < 1350);
        };

        // Attach event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that this effect runs only once on mount

    return (
        <nav className={"navbar mt-5"}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={whiteLogo} height={"30px"} width={"218px"} alt="Lejhro White Logo" /></a>
                {!isCollapsed && (windowWidth > 1350) &&
                    <div className="row ms-auto g-4" style={{ marginRight: '80px' }}>
                        <div className="col-auto nav-item"><a className="nav-link fs-5 text-light" aria-current="page" href="/">Innovations</a></div>
                        <div className="col-auto nav-item"><a className="nav-link fs-5 text-light" aria-current="page" href="/">Business Services</a></div>
                        <div className="col-auto nav-item"><a className="nav-link fs-5 text-light" aria-current="page" href="/">Financial Services</a></div>
                        <div className="col-auto nav-item"><a className="nav-link fs-5 text-light" aria-current="page" href="/">Innovations</a></div>
                    </div>
                }
                <button className={"navbar-toggler my-button"} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <div className={"line line1"}></div>
                    <div className={"line line2"}></div>
                    <div className={"line line3"}></div>
                </button>
                <Sidebar />
            </div>
        </nav>
    )
}

export default Navbar
