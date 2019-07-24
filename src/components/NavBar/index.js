import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar bg-light fixed-top navbar-expand">
            <div class="container">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink exact to="/About" className="text-dark nav-link">
                    <a>About</a>
                  </NavLink> 
                </li>
                <li className="nav-item">
                  <NavLink to="/Portfolio" className="text-dark nav-link" activeClassName="active">
                    Portfolio
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <a href={Resume} target="_blank" className="text-dark nav-link" activeClassName="active">
                    Resume
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        )
    }
}

export default withRouter(NavBar);