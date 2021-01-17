import times from "lodash/times";

export const displayCardNumber = (value) => {
  const emptyCardNumber = "#### #### #### ####";
  const newValue = [...emptyCardNumber];

  [...value].forEach((number, index) => {
    if (index === 4 || index === 9 || index === 14) {
      newValue[index] = " ";
      newValue[index + 1] = index < 13 ? "*" : number;
      return;
    }
    if (index > 4 && index < 14) {
      newValue[index] = "*";
    } else newValue[index] = number;
  });

  return newValue.join("");
};

export const addSpaces = (value) => {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter((group) => !!group).join(" ")
  );
};

export const createYears = () => {
  const todaysYear = new Date().getFullYear();
  const years = [todaysYear];
  times(10, () => years.push(years[years.length - 1] + 1));
  return years;
};

export const MONTHS = [
  { name: "January", value: "01" },
  { name: "February", value: "02" },
  { name: "March", value: "03" },
  { name: "April", value: "04" },
  { name: "May", value: "05" },
  { name: "June", value: "06" },
  { name: "July", value: "07" },
  { name: "August", value: "08" },
  { name: "September", value: "09" },
  { name: "October", value: "10" },
  { name: "November", value: "11" },
  { name: "December", value: "12" },
];

export const CARD_BACKGROUNDS = [
  "linear-gradient(304deg, #ff006a 0%, #00d4ff 100%)",
  "linear-gradient(304deg, #00d0ff 0%, #ecff81 100%)",
  "linear-gradient(304deg, #004eff 0%, #81ffc5 100%)",
  "linear-gradient(304deg, #004eff 0%, #ff81a4 100%)",
  "linear-gradient(304deg, #ff006a 0%, #ecff81 100%)",
];
