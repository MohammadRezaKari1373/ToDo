import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sidebar.css";
import Product from "../../page/product";
import Home from "../../page/Hom";
import Report from "../../page/import";
import Tasks from "../../page/Tasks";
import * as Ioicons from "react-icons/io5";
import "./sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav
                  onSelect={(selected) => {
                    const to = "/" + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="Tasks">
                    <NavItem eventKey="Tasks">
                      <NavIcon>
                        <Ioicons.IoHomeOutline />
                      </NavIcon>
                      <NavText>Tasks</NavText>
                    </NavItem>
                    <NavItem eventKey="myday">
                      <NavIcon>
                        <Ioicons.IoSunnyOutline />
                      </NavIcon>
                      <NavText>My day</NavText>
                    </NavItem>
                    <NavItem eventKey="product">
                      <NavIcon>
                        <Ioicons.IoStarOutline />
                      </NavIcon>
                      <NavText>Important</NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <main>
                  <Route path="/Tasks" component={Tasks} />
                  <Route path="/myday" exact component={Home} />
                  <Route path="/product" component={Product} />
                  <Route path="/import" component={Report} />
                </main>
              </React.Fragment>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default Sidebar;
