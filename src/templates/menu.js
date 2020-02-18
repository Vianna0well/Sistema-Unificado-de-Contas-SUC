import React from 'react';
import Logo from '../assets/logo.png'

export default function Navbar() {
    return (
        <nav class="navbar navbar-default banner">
            <div class="navbarPrincipal">
                <div class="navbar-header">
                    <img src={Logo} alt='Logo SUC'></img>
                </div>

                <div class="navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-right navbar-nav-primary">
                        <li className='navlink'><a className='homelink' href="/">Home</a></li>
                        <li className='navlink'><a href="/">Listar</a></li>
                        <li className='navlink'><a href="/create">Criar Boleto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
