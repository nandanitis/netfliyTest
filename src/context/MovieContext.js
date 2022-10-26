import { createContext, useReducer}  from 'react';
export const MovieContext = createContext()


export const moviesReducer = (state, action) => {
    switch (action.type) {
      case 'SET_MOVIES':
        return { 
          movies: action.payload 
        }
      case 'CREATE_MOVIE':
        return { 
          movies: [action.payload, ...state.movies] 
        }
        
      default:
        return state
    }
  }

export const MovieContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(moviesReducer, { 
        movies : null
      })
      
    return(
        <MovieContext.Provider value={{...state,dispatch}}>
            {children}
        </MovieContext.Provider>
    )
}