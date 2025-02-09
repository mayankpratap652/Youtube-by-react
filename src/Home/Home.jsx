import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import Feed from '../Components/Feed/Feed'

function Home({sidebar}) {

  const [Category , setCategory] = useState(0);
  return (
  <div className="section">

<Sidebar Category={Category} sidebar={sidebar} setCategory={setCategory} />
<div className="header">
  
<Feed Category={Category}/>
</div>
      

  </div>
        
  )
}

export default Home