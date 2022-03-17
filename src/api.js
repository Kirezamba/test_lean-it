import { dataReceived, dataRequested } from "./store/slices/dataSlice";

const generateData = () => {
  const data = [];
  const getWord = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let word = "";
    for (let i = 0; i < 6; i++) {
      word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    }
    const newWord = word.charAt(0).toUpperCase() + word.slice(1);
    return newWord;
  };
  const getCity = () => {
    const cities = [
      "Moscow",
      "New York",
      "Milano",
      "Saint Petersburg",
      "London",
      "Paris",
      "Berlin",
    ];
    let city = "";
    for (let i = 0; i < cities.length; i++) {
      city = cities[Math.round(Math.random() * (cities.length - 1))];
    }
    return city;
  };
  const getPhone = () => {
    const digits = "0123456789";
    let number = "";
    for (let i = 0; i < 8; i++) {
      number += digits[Math.round(Math.random() * (digits.length - 1))];
    }
    return +number;
  };

  for (let i = 0; i < 1000000; i++) {
    data.push({
      id: Math.ceil(Math.random() * 1000000),
      name: getWord(),
      phone: `+7-${getPhone()}`,
      city: getCity(),
      timeRegistered: new Date().toString(),
    });
  }
  return data;
};

export const fetchData = () => async (dispatch) => {
  dispatch(dataRequested());
  const resp = new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(generateData());
    }, 1500);
  });
  const data = await resp;

  dispatch(dataReceived(data));
};
