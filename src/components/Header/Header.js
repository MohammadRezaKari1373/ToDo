import React from "react";
import PropTypes from "prop-types";
import TodoTextInput from "../TodoTextinput/TodoTextinput";

const Header = ({ addTodo }) => (
  <header className="header">
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder=""
    />
  </header>
);

Header.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Header;
