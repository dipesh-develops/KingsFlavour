import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  // imported custom hook to get restaurant data
  const restaurant = useRestaurantMenu(id);
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
