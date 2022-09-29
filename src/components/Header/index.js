import React, {Component} from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";


class Header extends Component {   
    render() {
    return (
        <HashRouter>
            <div className="row Header" id="header">
                <a href="https://AlexxSavov.github.io/MyPortfolio/">
                    <img src="https://img.icons8.com/clouds/100/000000/earth-element.png/>"
                     alt="Alexandre Savov" 
                     class="icon" 
                     id="sonny"/></a>
                <Navigation/>
            </div>
    

    <div className="content">
          <Route exact path="/" render={() => (<Redirect to="/portfolio"/>)}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
    </HashRouter>
    )
}
}

export default Header;