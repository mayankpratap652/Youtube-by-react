import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Video from './Video/Video'

function App() {

  const [sidebar,setSidebar] = useState(true)

console.log(sidebar);

  return (
    <div>
<Navbar setSidebar={setSidebar}/>
<Routes>
  <Route path='/' element={<Home/>}  />
  <Route path='/Video/:categoryId/:videoId' element={<Video/>} />
</Routes>
    </div>
  )
}

export default App