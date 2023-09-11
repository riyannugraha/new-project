import { Route, Routes, useLocation } from 'react-router-dom'
import { Doa, Home, Quran, Sholawat, Sunnah, Navbar } from './Pages';
import LyricPage from './components/LyricPage'
import Ayat from './components/Ayat';

function App() {

  const loc = useLocation();
  const isDetailsContent = loc.pathname.includes('/quran-page');
  return (
    <>
      {/* <div className='gradient-background'> */}
      <div className='bg-custom bg-cover min-h-full'>
        {!isDetailsContent && <Navbar />}
        <Routes>
          <Route exact path='/' element={<Sholawat />} />
          <Route path='/Quran' element={<Quran />} />
          <Route path='/Sunnah' element={<Sunnah />} />
          <Route path='/Doa' element={<Doa />} />
          <Route path='/Sholawat' element={<Sholawat />} />
          <Route path='/:id' element={<LyricPage />} />
          <Route path='/surah/:surahId' element={<Ayat />} />
        </Routes>
      </div >
    </>
  )
}

export default App
