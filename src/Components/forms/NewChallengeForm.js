import React from "react";
import LocalApi from "../../apis/local";



const NewChallengeForm = () => {
    return (
        <form onSubmit = {(e) => {
            e.preventDefault();
            const file = document.getElementById("uploadvideo").files[0]; 
            const title = document.getElementById("title").value;
            uploadFile(file, title);
            }} encType="multipart/form-data">
            <div>
                <input type="text" placeholder="title" name="title" id="title" />
            </div>
            <div>
                <input type="file" id="uploadvideo" name="video" />
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    );
}

//upload file function
const uploadFile = (file, title) => {
    const fd = new FormData();
    fd.append("video", file);
    fd.append("title", title);
    console.log("inside fd");


    LocalApi.post("/challenges/upload", fd);

    console.log("upload file method ran");

}
// document.addEventListener("DOMContentLoaded", () => {
//     const uploadVideo = document.querySelector("#uploadvideo");
//         uploadVideo.addEventListener("change", () => {
//             console.log("inside uploadvideo");
//             const file = document.getElementById('uploadvideo').files[0];
//             console.log(file);
//             // uploadFile(file);
//         })
//     });



export default NewChallengeForm;

//enctype="multipart/form-data"