import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";


class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand navbar-light">
            <div>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink exact to="/About" className="nav-link">
                    <a>About</a>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Portfolio" className="nav-link" activeClassName="active">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Resume" className="nav-link" activeClassName="active">
                    Resume
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default withRouter(NavBar);