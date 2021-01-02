import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { connect } from "react-redux";
import { userActions } from "../actions";
import "./panelpage.css";

class PanelPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { user, users } = this.props;
    return (
      <>
        <div className="navbars">
          <Navbar />
        </div>

        <div className="sidebar">
          <Sidebar />
        </div>
      </>
    );
  }
}

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
};

const connectedPanelPage = connect(mapState, actionCreators)(PanelPage);

export { connectedPanelPage as PanelPage };
