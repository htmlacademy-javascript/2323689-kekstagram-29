const workDay =(startDay, finishDay, startMeet, durationMeet) => {
  let getTime = (time) => {
    let getArrTime = time.split(':');
    return Number(getArrTime[0] * 60 + Number(getArrTime[1]));
  };
  if (getTime(startMeet) >= getTime(startDay) && getTime(startMeet) + durationMeet <= getTime(finishDay)) {
    return true;
  }
  return false;
};
