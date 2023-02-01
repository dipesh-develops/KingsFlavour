import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();
  console.log("use");
  console.log(useState());
  useEffect(() => {
    getRestaurantsMenu();
  }, []);

  async function getRestaurantsMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.6105073&lng=77.1145653&menuId=" +
        id
    );
    const json = await data.json();
    setRestaurant(json.data);
    console.log("restaurant menu");
    console.log(json);
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h1>Restaurant id:{id}</h1>
        <p>{restaurant?.name}</p>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      </div>
      <div>
        <h1>menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
