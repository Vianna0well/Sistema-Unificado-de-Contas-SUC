import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href='/#'>Boletos</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href='/#'>Listar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href='/Create'>Criar</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
