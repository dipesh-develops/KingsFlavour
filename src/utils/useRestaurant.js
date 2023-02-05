import { useEffect, useState } from "react";
const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurant(json.data?.cards[2]?.data?.data?.cards);
  }
  return restaurant;
};
export default useRestaurant;
