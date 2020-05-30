const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 8;
  } else if (day === "wednesday") {
    return 8;
  } else if (day === "thursday") {
    return 8;
  } else if (day === "friday") {
    return 8;
  } else if (day === "saturday") {
    return 8;
  } else if (day === "sunday") {
    return 8;
  } else {
    return "Input is not a valid day";
  }
};

console.log(getSleepHours("tuesday"));
console.log(getSleepHours("thursday"));

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 5.5;
  return idealHours * 7;
};

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("Perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(" U sleep more than needed");
  } else {
    console.log("U should get some rest.");
  }
  if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  }
};
calculateSleepDebt();
