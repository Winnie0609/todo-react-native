const initialState = [
  {text: 'Do laundry', id: 1, completed: true},
  {text: 'Buy Milk', id: 2, completed: false},
]

const todos = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: action.id,
        text: action.text,
        completed: false
      }]

    case 'TOGGLE_TODO':
      return state.map((item) => {
        if (item.id === action.item.id) {
          return {
            ...item, completed: !item.completed
          }
        }

        return item
      })

    case 'DELETE_TODO':
      return state.filter((item) => item.id !== action.item.id)

    case 'EDIT_TODO':
      return state.map((item) => {
        if (item.id === action.item.id) {
          return {
            ...item, completed: !item.completed
          }
        }

        return item
      })
    
    default:
      return state
  }
}

export default todos