import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar({setSidebar}) {
  return (
    //navbar section............
   <nav className="flex-div">
       <div className="nav-left flex-div">
         
               <img src="https://cdn-icons-png.flaticon.com/128/12127/12127259.png" alt="" onClick={ () => setSidebar(prev=>prev=== false? true:false)} className='menu-icon' />
               <Link to='/'>
               <img src="https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=180" alt="" className='logo'/>
               </Link> 
           </div> 
        <div className="nav-middle flex-div">
          <div className="search-box flex-div">

          <input type="text" placeholder='Search....' />
                   <img src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" />
          </div>

            </div>
                 <div className="nav-right flex-div">
                    <img src="https://cdn-icons-png.flaticon.com/128/3926/3926021.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/512/512142.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/2645/2645897.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png" alt="" className='user-icon' />


                  </div>
  
   </nav>
  )
}

export default Navbar