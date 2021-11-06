import { connect } from 'react-redux'
import { toggleTodo } from '../actions/action'
import TodoList from '../containers/TodoList'

const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(item => item.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(item => !item.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todos, state.getFilteredTodos)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch({
    type: 'TOGGLE_TODO', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)