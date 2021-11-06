import { combineReducers } from 'redux'
import todos from './todos'
import filteredTodos from './filteredTodos'

const rootReducer = combineReducers({
  todos: todos,
  filteredTodos: filteredTodos
})

export default rootReducer