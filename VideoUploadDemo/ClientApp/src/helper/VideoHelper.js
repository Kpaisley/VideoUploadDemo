

export const getVideos = (userID) => {
    const allVideos = require("../uploads/videos.json")
    const userVideos = [];

    for (let i = 0; i < allVideos.data.length; i++) {

        if (allVideos.data[i].userID === userID) {
            userVideos.push(allVideos.data[i])
        }
    }
    return userVideos;
}
