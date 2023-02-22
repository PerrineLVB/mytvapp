import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'

function App() {
  const [title, setTitle] = useState('my TV app')

  return (
    <div className="App">
      <div>
          <img src="https://cdn-icons-png.flaticon.com/512/2593/2593966.png" className="w-50" />
        <h1>{title}</h1>
        <p>Based on <a href="https://www.tvmaze.com/">TV MAZE</a></p>
        {/* <button onClick={() => setTitle('Chocolatine')}>Révéler la vérité</button> */}
      </div>
      <Search />
    </div>
  )
}

export default App