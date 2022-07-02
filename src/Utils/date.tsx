const RemoveTime = (date = new Date()) => {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
  }

  export default RemoveTime;