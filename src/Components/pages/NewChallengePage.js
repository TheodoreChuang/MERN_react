import React from "react";

const fs = require("fs");
const youtube = require("./config/youtube")

const NewChallengePage = () => {
    const onUploadSubmit = () => {
        youtube.videos.insert({
            snippet: {
                title: "testing API upload",
                description: "test desc"
            },
            media: {
                body: fs.createReadStream("Untitled.mov"),
            },
            part: "snippet"
            })
            .then(response => console.log(response))
            .catch(err => console.log(err));
        }

    return (
        <div>
            <h1> Create New Challenge </h1>
            <form>
                <input type="file" />
                <div>
                    <input type="submit" value="upload" accept="video/*" onSubmit = {onUploadSubmit}/>
                </div>
            </form>
        </div>
    );
}

export default NewChallengePage;


// app.get("/list", function() {
//     youtube.videos.list({ part: "contentDetails", chart: "mostPopular"})
//         .then(response => console.log(response.data.items))
//         .catch(err => console.log(err));
// });

// app.get("/create", function() {
// youtube.videos.insert({
//     snippet: {
//         title: "testing API upload",
//         description: "test desc"
//     },
//     media: {
//         body: fs.createReadStream("Untitled.mov"),
//     },
//     part: "snippet"
// })
// .then(response => console.log(response))
// .catch(err => console.log(err));
// })