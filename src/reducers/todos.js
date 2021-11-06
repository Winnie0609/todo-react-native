const initialState = [
  { text: 'Do laundry', id: 'dsa-xsax-374981', completed: true },
  { text: 'Buy Milk', id: 'sdah-235-xsa', completed: false },
]

const todos = (state = [], action) => {

  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state, { 
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
    
    default:
      return state
  }
}

export default todos