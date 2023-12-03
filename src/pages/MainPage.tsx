import { useEffect, useState } from "react";
import CustomFilter from "../CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils/fetchCars";
import { CarType } from "../types";
import Card from "../components/Card";
import ShowMore from "../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import { fuels, years } from "../constants";

const MainPage = () => {
  const [params] = useSearchParams();
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    //diziden object'e çevirmek için object.fromEntries() kullanılır
    const paramsObj = Object.fromEntries(params);
    fetchCars(paramsObj)
      .then((data) => {
        setCars(data);
      })
      .catch(() => setIsError(true));
  }, [params]);
  // console.log(cars);
  //console.log(Object.fromEntries(params));
  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogue</h1>
          <p>Find your favorite cars</p>
        </div>
        {/* filter section */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Fuel Type" options={fuels} />
            <CustomFilter title="Model Year" options={years} />
          </div>
        </div>
        {!cars ? (
          <div className="home__error-container">
            <h2>Loading</h2>
          </div>
        ) : isError ? (
          <div className="home__error-container">
            <h2>Sorry. Unexpected Fault!</h2>
          </div>
        ) : cars.length < 1 ? (
          <div className="home__error-container">
            <h2>Sorry! Found Nothing</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
            <ShowMore />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
