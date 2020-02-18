import React from 'react';
import Logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-default banner">
            <div className="navbarPrincipal">
                <div className="navbar-header">
                    <img src={Logo} alt='Logo SUC'></img>
                </div>

                <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-right navbar-nav-primary">
                        <li className='navlink'><a className='homelink' id='link-a' href="/">Home</a></li>
                        <li className='navlink'><a href="/" id='link-a'>Listar</a></li>
                        <li className='navlink'><a href="/create" id='link-a'>Criar Boleto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
