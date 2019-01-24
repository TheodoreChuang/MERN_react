const defaultState = [
//     {
//     title: "challenge submission 1",
//     yt_id: "Q2aQiM3fj-Q",
//     date_created: "23 January 2018"
// },
// {
//     title: "challenge submission 2",
//     yt_id: "mfJC34tOZms" ,
//     date_created: "23 January 2018"
// }
]

export default (state = defaultState, action) => {
    switch(action.type) {
        case "SUBMISSIONS_LIST":
            return action.payload;
        case "ADD_SUBMISSION":
            return action.payload;
        case "DELETE_SUBMISSION":
            return action.paylod
        default:
            return state;
    }
}

