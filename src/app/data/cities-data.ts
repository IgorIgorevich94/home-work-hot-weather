import { ICityInfoModel } from "./city-info-model";

const _cities: ICityInfoModel[] = [
  {
    id: 1,
    name: "Киев",
    img: "assets/images/kiev.jpg",
    country: "Украина",
    phone: 1234567890,
    weather: {
      title: "Киевская погода",
      icon: "string",
      water: 35,
      temperature: 40
    },
    socialInfo: {
      title: "Что-то Киевское",
      img: "string",
      followers: 54345,
      following: 345643
    }
  },
  {
    id: 2,
    name: "Москва",
    img: "assets/images/moscow.jpg",
    country: "Россия",
    phone: 34546654,
    weather: {
      title: "Московская погода",
      icon: "string",
      water: 20,
      temperature: 30
    },
    socialInfo: {
      title: "Московский текст",
      img: "string",
      followers: 1488,
      following: 5535
    }
  },
  {
    id: 3,
    name: "Минск",
    img: "assets/images/minsk.jpg",
    country: "Беларусь",
    phone: 5665476868,
    weather: {
      title: "Погода в Беларуси",
      icon: "string",
      water: 32,
      temperature: 25
    },
    socialInfo: {
      title: "Беларусский текст",
      img: "string",
      followers: 65567,
      following: 5467578
    }
  }
];

export const data: ICityInfoModel[] = _cities;
