import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TodoTextInput from "../TodoTextinput/TodoTextinput";
import "./Todoitem.css";
import * as Ioicons from "react-icons/io";
import * as Aicons from "react-icons/Ai";

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
  };

  state = {
    editing: false,
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ editing: false });
  };

  render() {
    const { todo, completeTodo, deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <Ioicons.IoMdClose
            className="destroy"
            onClick={() => deleteTodo(todo.id)}
          />

          <Aicons.AiOutlineEdit
            onClick={this.handleDoubleClick}
            className="iconeedite"
          />

          <label>{todo.text}</label>
        </div>
      );
    }

    return (
      <li
        className={classnames({
          completed: todo.completed,
          editing: this.state.editing,
        })}
      >
        {element}
      </li>
    );
  }
}
