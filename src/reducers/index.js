import { combineReducers } from 'redux'
import todos from './todos'
import filteredTodo from './filteredTodo'

const rootReducer = combineReducers({
  todos: todos,
  filteredTodo: filteredTodo
})

export default rootReducer