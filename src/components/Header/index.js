import React from 'react';
import Navigation from '../../components/Navigation';


const Header = () => {   
    return (
        <div className="row Header" id="header">
            <a href="https://AlexxSavov.github.io/MyPortfolio/">
                <img src="https://img.icons8.com/clouds/100/000000/earth-element.png"
                    alt="Alexandre Savov" 
                    className="icon" 
                    id="sonny"/></a>
            <Navigation/>
        </div>
    )
}

export default Header;