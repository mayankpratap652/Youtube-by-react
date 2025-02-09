import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY } from '../../data';
import { value_converter } from '../../data';
import moment from 'moment';
import { Link } from 'react-router-dom';

function Recommended({categoryId}) {

  const[apiData,setApiData] = useState([]);

const fetchdata = async () =>{
  const vedio_url =`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCtegoryId=${categoryId}&key=${API_KEY}`;
  await fetch(vedio_url).then(res=>res.json()).then(data=>setApiData(data.items));

}
useEffect(()=> {
fetchdata();
},[])

  return (
 
 <div className="Recommend">
  {apiData.map((item,index)=>{
    return(
      <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="Sidesection">
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <div className="vidinfo">
          <h4>{item.snippet.title}</h4>
          <p>{item.snippet.channelTitle}</p>
          <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publisherAt).fromNow()}</p>
      </div>
    </Link>
    )
  })}
  
           
  
    

    


  </div>
 
  )
}

export default Recommended