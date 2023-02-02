import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../contants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant;
};
export default useRestaurant;
