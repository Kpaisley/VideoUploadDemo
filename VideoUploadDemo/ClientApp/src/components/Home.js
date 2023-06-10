import React, { useState } from 'react';


export const Home = (props) => {
    const [videos, setVideos] = useState([]);

    

    function uploadVideo(e) {
        e.preventDefault();
        let files = e.target[0].files;

        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = async (e) => {
           
            let videoToUpload = {
                userID: 'ABC123',
                videoTitle: 'TEST VIDEO 2',
                videoStream: e.target.result
            }


            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(videoToUpload)
            }

            await fetch('videos', requestOptions);

        }
    }

  
    return (
      <div>
        <h1>Hello, world!</h1>
            <form onSubmit={(e) => uploadVideo(e) }>
                <input type="file" accept=".mp4" name="file"></input>
                <br />
                <br />
                <input type="submit" value="Upload File"></input>
               
                
            </form>
      </div>
    );
  
}
