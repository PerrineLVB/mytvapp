import { useState } from 'react'
import './App.css'
import { MyComponent } from './components/MyComponent'
import { MyOtherComponent } from './components/MyOtherComponent'
import { Search } from './components/Search'

function App() {
  const [title, setTitle] = useState('my TV app')

  return (
    <div className="App">
      <div>
        <h1>{title}</h1>
        {/* <button onClick={() => setTitle('Chocolatine')}>Révéler la vérité</button> */}
      </div>
      <Search />
      {/* <MyOtherComponent />
      <MyComponent /> */}
    </div>
  )
}

export default App