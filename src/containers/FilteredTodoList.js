import { connect } from 'react-redux'
import { toggleTodo } from '../actions/action'
import TodoList from '../components/TodoList'
import { filterOptions } from '../actions/action'

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case filterOptions.SHOW_ALL:
      return todos
    case filterOptions.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case filterOptions.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getFilteredTodos(state.todos, state.filteredTodo)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)