import React, { Component } from "react";
import NewChallengeForm from "./../forms/NewChallengeForm";

class NewChallengePage extends Component {

    render() {
        return (
            <div>
                <h1> Create New Challenge </h1>
                <NewChallengeForm />
            </div>
            );
        }
}

export default NewChallengePage;


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

{/* <div>
<input type="text" placeholder="Title of the Challenge"/>
</div>
<div>
<input type="text" placeholder="How the challenge should be completed"/> */}
// </div>

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

        // list = () => {
        //     youtube.videos.list({ part: "contentDetails", chart: "mostPopular"})
        //         .then(response => console.log(response.data.items))
        //         .catch(err => console.log(err));
        // };