import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Resume from './Cuauhtemoc Rodriguez-Resume.pdf'


class NavBar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand navbar-light">
            <div class="container">
              <ul className="navbar-nav mx-auto">
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
                  <a href={Resume} target="_blank" className="nav-link" activeClassName="active">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default withRouter(NavBar);