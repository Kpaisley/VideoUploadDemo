import React, { useEffect, useState } from 'react';
import { getVideos } from '../helper/VideoHelper';


export const Home = (props) => {
    const [videos, setVideos] = useState([]);
    const [videosLoading, setVideosLoading] = useState(true);

    function uploadVideo(e) {
        e.preventDefault();
        let files = e.target[0].files;
        console.log(e.target[0].files);
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = async (e) => {
            
            /*NEED FIX THIS SO THAT NEW VIDEOS ARE ADDED TO videos.json FILE*/

            //let videoToUpload = {
            //    userID: 'ABC123',
            //    videoTitle: 'TEST VIDEO 2',
            //    videoStream: e.target.result
            //}


            //const requestOptions = {
            //    method: "POST",
            //    headers: { "Content-Type": "application/json" },
            //    body: JSON.stringify(videoToUpload)
            //}

            //await fetch('videos', requestOptions);

        }
    }

    //Populate a user's videos
    useEffect(() => {
        const videos = getVideos('ABC123');
        setVideos(videos);
        setVideosLoading(false);
    }, [])

  
    return (
        <div>
        <h1>Hello, world!</h1>
            <form onSubmit={(e) => uploadVideo(e) }>
                <input type="file" accept=".mp4" name="file"></input>
                <br />
                <br />
                <input type="submit" value="Upload File"></input>
               
                
            </form>
            {videos.map((vid) => (
                <div key={vid.videoTitle}>
                    <video controls width="500px">
                        <source autoPlay type="video/mp4" src={vid.videoStream}></source>
                    </video>
                </div>
                


                
            ))}
      </div>
    );
  
}
