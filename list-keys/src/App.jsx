import { useState } from 'react';
import './App.css';
import MoviesList from './components/MoviesList/MoviesList';
import Drinks from './components/DrinksList/Drinks';
import ProjectsList from './components/ProjectsList/ProjectsList';

const App = () => {

  const [showMovies, setShowMovies] = useState(true)

  const handleShowMovies = () => setShowMovies(!showMovies)

  return (

    <main className='App'>

      <button onClick={handleShowMovies}>{showMovies ? 'OCULTAR' : 'MOSTRAR'} PELICULAS</button>

      {showMovies && <MoviesList />}

      {/* 
      <ProjectsList />
      <Drinks />
       */}
    </main>
  )
}

export default App;
