import React, { useEffect, useState } from 'react'
import "./Feed.css"
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'


function Feed({Category}) {

    const [data,setData] = useState([])

    const fetchdata = async () =>{
        const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${Category}&key=${API_KEY}`
    await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }

    useEffect(()=>{
fetchdata();

    },[Category])
  return (


    <div className="Container">
        
{data.map((item,index)=>{
    return (
<Link to={`video/${item.snippet.categoryID}/${item.id}`} className="feed">
    <img src={item.snippet.thumbnails.medium.url} alt="" />
     <h2>{item.snippet.title}</h2>
     <h3>{item.snippet.channelTitle}</h3>
     <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
 </Link>
    )
    
})}

    
      
    </div>
  )
}

export default Feed