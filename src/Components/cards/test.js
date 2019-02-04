var moment = require('moment');
// import moment from "moment";

dateParser = (string) => {
    const parsed = Date.parse(string);
    // console.log(parsed);
    const ms = new Date(parsed);

    const output = moment(parsed).format("DD MMM,YYYY");
    console.log(output);
}

dateParser('2019-02-04T03:29:05.817Z');

// const parsed = Date.parse('2019-02-04T03:29:05.817Z');

// const fresh = new Date(parsed);

// console.log(fresh);