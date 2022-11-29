import { useState } from 'react';
import './App.css'
import Counter from './components/Counter/Counter';

const App = () => {

  const [currentTheme, setCurrentTheme] = useState('theme-light')

  const handleCurrentTheme = event => {
    // El objeto event permite conocer el valor (value) seleccionado (target)
    setCurrentTheme(event.target.value)
  }

  return (

    <main className={`App ${currentTheme}`}>

      <Counter />

      <hr />

      <select onChange={handleCurrentTheme}>
        <option value="theme-light"> Light </option>
        <option value="theme-dark"> Dark </option>
      </select>

    </main>
  )
}

export default App