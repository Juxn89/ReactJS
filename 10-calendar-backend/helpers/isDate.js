const moment = require('moment');

const isDate = (value, {req, location, path}) => {
    if(!value) return false;

    const date = moment(value);
    console.log(date);
    return date.isValid();
}

module.exports = isDate;