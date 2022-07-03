/**
  * remove time from a date
  * @param {Date} date
  * @returns {Date}
  */
const RemoveTime = (date = new Date()) => {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
    );
}

export default RemoveTime;