import React from "react";
import LocalApi from "../../apis/local";

//upload file function
const uploadFile = (file) => {
    console.log("inside upload file function");
    console.log(file);
    // const url = "http://localhost:3000/challenges/upload";
    // const xhr = new XMLHttpRequest();
    const fd = new FormData();

    // xhr.open("POST", url, true);
    fd.append("upload_file", file);
    // xhr.send(fd);

    LocalApi.post("/challenges/upload", fd);

    console.log("upload file method ran");

}

const NewChallengeForm = () => {
    return (
        <form onSubmit = {(e) => {
            e.preventDefault();
            console.log("onsubmit running");
        const file = document.getElementById('uploadvideo').files[0]; 
        uploadFile(file);
        }}>
            <input type="file" id="uploadvideo" name="video" />
            <div>
                <input type="submit" />
            </div>
        </form>
    );
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