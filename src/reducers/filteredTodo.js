import { filterOptions } from '../actions/action'

const filteredTodo = (state = filterOptions.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_FILTERED_TODO':
      return action.filter
    default:
      return state
  }
}

export default filteredTodo
