let id = 3

export const addTodo = (item) => ({
  type: 'ADD_TODO',
  id: id++,
  text: item.text
})

export const deleteTodo = (item) => ({
  type: 'DELETE_TODO',
  item
})

export const toggleTodo = (item) => ({
  type: 'TOGGLE_TODO',
  item
})

export const editTodo = (item) => ({
  type: 'EDIT_TODO',
  item
})

export const setFilteredTodo = (filter) => ({
  type: 'SET_FILTERED_TODO',
  filter
})

export const filterOptions = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}