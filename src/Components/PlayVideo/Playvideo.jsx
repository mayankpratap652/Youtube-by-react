import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import { API_KEY, value_converter } from '../../data';

import moment from 'moment';
import { data, useParams } from 'react-router-dom';


function Playvideo() {

    const {videoId} = useParams();

const [apiData,setApiData] = useState(null);
const[channeldata , setChanneldata ]=  useState(null);
const [commentdata,setCommentdata] = useState([]);



const fetchvideodata = async() => {
    //fetching vedios data 

    const videodetails_Url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    await fetch(videodetails_Url).then(res=>res.json()).then(data=> setApiData(data.items[0]));

}

const fetchotherdata = async() => {
    const commentfetch_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(commentfetch_url).then(res=>res.json()).then(data=>setChanneldata(data.items[0]));



const comment_Url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_Url).then(res=>res.json()).then(data=>setCommentdata(data.items));

}


    useEffect(() => {
fetchvideodata();
    },[videoId])

    useEffect(() => {
fetchotherdata();
    },[apiData])


    
  return (
    <div className="videocontainer">
         <div className="playvideo">

         {/* <video src="https://videos.pexels.com/video-files/1448735/1448735-sd_960_506_24fps.mp4" controls autoPlay muted></video> */}

         <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1 `} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<h3>{apiData?apiData.snippet.title:"Tilte Here"}</h3>
    <div className="playvideo-info">
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} &bull; {apiData?moment(apiData.snippet.publisherAt).fromNow():""}</p>
   
    <div>
    <span><img src="https://cdn-icons-png.flaticon.com/128/126/126473.png" alt="" srcset="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
   <span><img src="https://cdn-icons-png.flaticon.com/128/126/126504.png" alt="" srcset="" /></span>
   <span><img src="https://cdn-icons-png.flaticon.com/128/1358/1358023.png" alt="" srcset="" />Share</span>
   <span><img src="https://cdn-icons-png.flaticon.com/128/5662/5662990.png" alt="" srcset="" />Save</span>


    </div>
    </div>
  
  
 
 <hr />
 <div className="publisher">

    <img src={channeldata?channeldata.snippet.thumbnails.default.url:""} alt="" />

 <div>
 <p>{apiData?apiData.snippet.channelTitle:""}</p>
<span>{channeldata?value_converter(channeldata.statistics.subscriberCount):"1M"}Subscribers</span>  
 </div>
<button>Subscribe</button>
</div>
<div className="description">
    <p>{apiData?apiData.snippet.description.slice(0,250):"Description"}</p>
    <p>Subscribe GreatStack to Watch More Tutorial</p>
    <hr />
    <h4>{apiData?value_converter(apiData.statistics.commentCount):102}</h4>
 
 {commentdata.map((item,index)=>{
    return(

        <div  key={index} className="comments">
        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className='like'/>
        <div>
             <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.publisherAt).fromNow()}</span></h3>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
       <div className="commentaction">
        <img src="https://cdn-icons-png.flaticon.com/128/126/126473.png" alt="" srcset=""  />
  <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
  <img src="https://cdn-icons-png.flaticon.com/128/126/126504.png" alt="" className='dislike' />

    </div>


        </div>
    </div>
    )
 })}
 
 



    
    </div>
    </div>
   </div>
  
  )
}

export default Playvideo