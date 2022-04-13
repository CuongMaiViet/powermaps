import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Layouts from './components/Layouts'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
