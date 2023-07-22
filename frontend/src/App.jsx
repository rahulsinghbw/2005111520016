import AllTrains from './components/AllTrains'
import Train from './components/Train'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='container'>
      <h1>Train Central</h1>

      <Routes>
        <Route path='/' element={<AllTrains />} />
        <Route path='/train/:id' element={<Train />} />
      </Routes>

    </div>
  )
}

export default App
