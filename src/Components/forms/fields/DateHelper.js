export default function getDateToday() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1; //January is 0!
    const yyyy = today.getFullYear();
    
    if (dd < 10) {
      dd = '0' + dd;
    }
    
    if (mm < 10) {
      mm = '0' + mm;
    }
    
    // DefaultValue (Date Component of Material UI) requires this specific date format otherwise won't  recognise/accept
    return today = `${yyyy}-${mm}-${dd}`;
    }

// export default getDateToday;