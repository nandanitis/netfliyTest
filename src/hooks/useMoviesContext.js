import { MovieContext } from "../context/MovieContext";

import { useContext } from "react"

export const useMoviesContext = () => {
  const context = useContext(MovieContext)

  if(!context) {
    throw Error('useMoviesContext must be used inside an MoviesContextProvider')
  }

  return context
}