import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Homepage from './Homepage.tsx'
import BetterEvents from './BetterEvents.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/betterevents" element={<BetterEvents />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
