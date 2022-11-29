import { useState } from "react"
import { moviesArray } from "../../fakeApi"
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesArray)

    const removeMovie = idToDelete => {
        // Filter SI retorna un nuevo array manipulado, no necesito copia manual
        const filteredMovies = movies.filter(elm => elm._id != idToDelete)

        setMovies(filteredMovies)
    }


    const addMovie = () => {
        const newMovie = { title: 'Pirañaconda', director: 'Bardem', _id: '8746IKGH', hasOscars: true, IMDBRating: 9 }

        // Saco una copia liviana (los array se pasan por referencia, no por valor!)
        const moviesCopy = [...movies]

        // Manipuilo la copia (unshift NO retorna un nuevo array, muta el original)
        moviesCopy.unshift(newMovie)

        // Actualizo el estado con la copia mutada
        setMovies(moviesCopy)
    }

    return (
        <section>
            <h2>Listado de películas</h2>

            <button onClick={addMovie}>AÑADIR PELICULA</button>

            <hr />

            {movies.map(elm => {
                return <MovieCard key={elm._id} {...elm} deleteMovie={removeMovie} />
            })}
        </section>
    )
}

export default MoviesList