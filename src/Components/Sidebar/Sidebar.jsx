import React from 'react'
import './sidebar.css'

function Sidebar({Category ,sidebar, setCategory}) {
  return (
    <div className={`sidebar  ${Sidebar?"":"small-sidebar"}`}>
        <div className="sortcut">
            <div className={`sidelink ${Category===0?'active':""}`} onClick={()=>setCategory(0)}>
                <img src="https://cdn-icons-png.flaticon.com/128/25/25694.png" alt="" /><p>Home</p>
            </div>

            <div className={`sidelink ${Category===20?'active':""}`}  onClick={()=>setCategory(20)} >
                <img src="https://cdn-icons-png.flaticon.com/128/686/686589.png" alt="" /><p>Gaming</p>
            </div>
            <div className={`sidelink ${Category===2?'active':""}`} onClick={()=>setCategory(2)} >
                <img src="https://cdn-icons-png.flaticon.com/128/1514/1514322.png" alt="" /><p>AutoMobile</p>
            </div>
            <div className={`sidelink ${Category===17?'active':""}`} onClick={()=>setCategory(17)}>
                <img src="https://cdn-icons-png.flaticon.com/128/4163/4163679.png" alt="" /><p>Sports</p>
            </div>
            <div className= {`sidelink ${Category===24?'active':""}`} onClick={()=>setCategory(24)}>
                <img src="https://cdn-icons-png.flaticon.com/128/1179/1179120.png" alt="" /><p>Entertainment</p>
            </div>
            <div className= {`sidelink ${Category===28?'active':""}`} onClick={()=>setCategory(28)}>
                <img src="https://cdn-icons-png.flaticon.com/128/1087/1087927.png" alt="" /><p>Tech</p>
            </div>
            <div className={`sidelink ${Category===10?'active':""}`} onClick={()=>setCategory(10)}>
                <img src="https://cdn-icons-png.flaticon.com/128/2995/2995035.png" alt="" /><p>Music</p>
            </div>
            <div className={`sidelink ${Category===22?'active':""}`} onClick={()=>setCategory(22)}>
                <img src="https://cdn-icons-png.flaticon.com/128/4922/4922073.png" alt="" /><p>Blog</p>
            </div>
            <div className= {`sidelink ${Category===25?'active':""}`} onClick={()=>setCategory(25)}>
                <img src="https://cdn-icons-png.flaticon.com/128/2537/2537926.png" alt="" /><p>News</p>
            </div>
            <div className="subscriber">

            <h1>Subscriber </h1> 
           
            <div className="subscribe">
            
               <img src="https://cdn-icons-png.flaticon.com/128/560/560277.png" alt="" />
               <p>John toe</p>
            </div>
            <div className="subscribe">
               
               <img src="https://cdn-icons-png.flaticon.com/128/560/560277.png" alt="" /><p>Peter Parker</p>
            </div>
           
            <div className="subscribe">
               
               <img src="https://cdn-icons-png.flaticon.com/128/560/560277.png" alt="" /><p>Welter Pets</p>
            </div>
            
            </div>
        </div>



    </div>
  )
}

export default Sidebar