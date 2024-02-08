import React from 'react'
import Sidebar from './Sidebar';
import blueLogo from '../assets/lejhro_logo_blue.png';


const FixNavbar = () => {

    return (
        <nav className="navbar navbar-width mx-auto bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={blueLogo} height="30px" width="218px" alt="Lejhro White Logo" /></a>
                <button className="navbar-toggler my-button bg-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <div className="line line1 border-white"></div>
                    <div className="line line2 border-white"></div>
                    <div className="line line3 border-white"></div>
                </button>
                <Sidebar />
            </div>
        </nav>
    )
}
export default FixNavbar
