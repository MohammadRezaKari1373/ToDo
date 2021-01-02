import React from "react";
import PropTypes from "prop-types";
import VisibleTodoList from "../../containers/VisibleTodoList";
import "./Mainsection.css";

const MainSection = ({ todosCount, completedCount, actions }) => (
  <div className="maintodo">
    <section className="main">
      <VisibleTodoList />
    </section>
  </div>
);

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default MainSection;
