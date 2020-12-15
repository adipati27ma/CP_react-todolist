import {createStore} from 'redux'

const initialState = {
  todos: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODOS': 
      return {
        ...state,
        todos: [...state.todos, action.payload]
      } 
      case 'DELETE_TODO':
        // delete dgn method splice
        let newTodos = [...state.todos] // copy state todos
        newTodos.splice(action.payload.index, 1) // hapus element array

        // delete dgn method filter
        // let newTodos = state.todos.filter((element, index) => index !== action.payload)
        
        return {
          ...state,
          todos: newTodos
        }
    default :
      return state
  }
}

const store = createStore(rootReducer);

export default store;