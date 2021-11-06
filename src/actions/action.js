// let id = 2
let id = Math.floor(Math.random() * 3000)

export const addTodo = (item) => ({
  type: 'ADD_TODO',
  id: id++,
  text: item.text
})

export const deleteTodo = (item) => ({
  type: 'DELETE_TODO',
  item
})

export const filteredTodo = (item) => ({
  type: 'FILTERED_TODO',
  item
})

export const toggleTodo = (item) => ({
  type: 'TOGGLE_TODO',
  item
})