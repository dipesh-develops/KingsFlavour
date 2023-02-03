import RestaurantCard from "./RestaurantCard";
import { restrautList } from "../contants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    //api call
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurant(json.data?.cards[2]?.data?.data?.cards);
  }
  // if (!restaurant) return null;
  // if (filterRestaurant?.length === 0) {
  //   return <h1>No serach result found</h1>;
  // }

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="search"
            className="bg-gray-100 m-3 w-[500px] p-2 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const data = filterData(searchText, restaurant);
              setFilterRestaurant(data);
            }}
            className="bg-[#333333] text-white w-28 h-9 rounded-md hover:bg-slate-600"
          >
            Search
          </button>
        </div>
        {restaurant?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="flex px-28 flex-wrap justify-evenly">
            {filterRestaurant.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <RestaurantCard
                    {...restaurant.data}
                    key={restaurant.data.id}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
