import React from "react";
import LocalApi from "../../apis/local";

const NewChallengeForm = () => {
    return (
        <form onSubmit = {(event) => {
            event.preventDefault();
            const file = document.getElementById("uploadvideo").files[0]; 
            const title = document.getElementById("title").value;
            const desc = document.getElementById("desc").value;

            uploadFile(file, title, desc);
            }} encType="multipart/form-data">
            <div>
                <input type="text" placeholder="title" name="title" id="title" />
            </div>
            <div>
                <input type="text" placeholder="description of challenge" name="desc" id="desc" />
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
const uploadFile = (file, title, desc) => {
    const fd = new FormData();
    fd.append("video", file);
    fd.append("title", title);
    fd.append("desc", desc);

    LocalApi.post("/challenges/upload", fd);
}

export default NewChallengeForm;