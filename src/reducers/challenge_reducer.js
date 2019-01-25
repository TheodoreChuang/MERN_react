const defaultState = [
    // {title: "dummy_video 1", 
    // yt_id: "mIesvKGLoLE", 
    // yt_url: "https://www.youtube.com/watch?v=mIesvKGLoLE",
    // description: "description text 1",
    // date_created: "23 January, 2018",
    // id: 1,
    // submissions: ["ezL5-W9WZSE", "U6l9NdAJwRk", "rL_BWQDRbJI"]
    // },
    // {title: "dummy_video 2", 
    // yt_id: "LM0ee-BA9Z0", 
    // yt_url: "https://www.youtube.com/watch?v=mIesvKGLoLE",
    // description: "description text 2",
    // date_created: "23 January, 2018",
    // id: 2
    // },
];

export default (state = defaultState, action) => {
    switch(action.type) {
        case "CHALLENGES_LIST":
            return action.payload;
        default: 
            return state;
    }
}