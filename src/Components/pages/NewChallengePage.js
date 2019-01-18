import React, { Component } from "react";

// const fs = require("fs");
// const youtube = require("./../../config/youtube");

class NewChallengePage extends Component {
    render() {
    // const onUploadSubmit = () => {
    // console.log(event.target.files[0]);
        // youtube.videos.insert({
        //     snippet: {
        //         title: "testing API upload",
        //         description: "test desc"
        //     },
        //     media: {
        //         body: fs.createReadStream("Untitled.mov"),
        //     },
        //     part: "snippet"
        //     })
        //     .then(response => console.log(response))
        //     .catch(err => console.log(err));
    return (
        <div>
            <h1> Create New Challenge </h1>
            <form onSubmit= {(event) => {
                event.preventDefault();
                 const input = document.querySelector("input[type=file]");
                 console.log(input);
                    }   
                        }>
                <div>
                    <input type="text" placeholder="Title of the Challenge"/>
                </div>
                <div>
                    <input type="text" placeholder="How the challenge should be completed"/>
                </div>
                <div>
                    <input type="file" />
                </div>
                <div>
                    <input type="submit" value="upload" accept="video/*" id="video" />
                </div>
            </form>
        </div>
        );
    }
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