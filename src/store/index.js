import { createStore } from 'redux'
import rootReducer from '../reducers'

let store
export default store = createStore(rootReducer)
