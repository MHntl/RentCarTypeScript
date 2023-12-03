//import axios from "axios";

import { CarType, FilterType } from "../types";

const options = {
  //method: "GET",
  // url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  //params: { model: "corolla" },
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters: FilterType): Promise<CarType[]> {
  //parametre verilmezse API e undefined gitmemesi için başlangıç degeri atayabiliriz
  const {
    fuel_type = "",
    limit = "5",
    make = "bmw",
    model = "",
    year = "",
  } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`,
    options
  );
  return await res.json();
}
