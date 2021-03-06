import { connect } from "react-redux";
import * as TodoActions from "../actions/todo";
import { bindActionCreators } from "redux";
import MainSection from "../components/Mainsection/Mainsection";
import { getCompletedTodoCount } from "../Selectors";

const mapStateToProps = (state) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
