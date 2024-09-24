import react from 'react';

function Header(){
    return(
        <header>
            <div className="header-logo">
                <div className="logo"></div>
            </div>
            <div className="header-search">

            </div>
            <div className="header-links">
                <li><a href="#">Usuários</a></li>
                <li><a href="#">Acessos</a></li>
            </div>
        </header>
    );  
}

export default Header;