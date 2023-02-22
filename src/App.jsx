import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'

function App() {
  const [title, setTitle] = useState('my TV app')

  return (
    <div className="App">
      <div>
        <h1>{title}</h1>
        <img src="" />
        <p>Based on <a href="https://www.tvmaze.com/">TV MAZE</a></p>
        {/* <button onClick={() => setTitle('Chocolatine')}>Révéler la vérité</button> */}
      </div>
      <Search />
    </div>
  )
}

export default App