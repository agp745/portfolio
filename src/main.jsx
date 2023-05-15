import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './css/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projectied from './components/Projects/Projectied'
import Mgl from './components/Projects/Mgl'
import PubCrawl from './components/Projects/PubCrawl'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/projectied' element={<Projectied />} />
        <Route path='/mgl' element={<Mgl />} />
        <Route path='pubcrawl' element={<PubCrawl />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
