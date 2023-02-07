import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
// import userContext from "../utils/userContext";

const Body = () => {
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const { user, setUser } = useContext(userContext);
  // if (filterRestaurant?.length === 0) {
  //   return <h1>No serach result found</h1>;
  // }
  const restaurant = useRestaurant();
  useEffect(() => {
    setFilterRestaurant(restaurant);
  }, [restaurant]);

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
          {/* <input
            className="bg-gray-100 m-3 rounded-md"
            value={user.name}
            onChange={(e) =>
              setUser({ name: e.target.value, email: "new email" })
            }
          /> */}
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
