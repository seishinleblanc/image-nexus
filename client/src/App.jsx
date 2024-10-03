import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from './assets';
import { Home, CreatePost, NewHome } from './pages';

document.body.style.backgroundColor = "#18181B";

const App = () => {
  return (
    <BrowserRouter>
      {/* <header className="w-full flex justify-between items-center bg-zinc-900 sm:px-8 px-4 py-4 border-b border-b-zinc-900">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <Link to="/create-post" className="font-inter font-medium bg-violet-400 text-white px-4 py-2 rounded-md">Transmute
        </Link>
      </header> */}
      <main className="sm:p-8 px-4 py-8 w-full bg-zinc-900 min-h-[calc(100vh-73px)] crt">
        <Routes>
          <Route path="/archive" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/" element={<NewHome />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App