import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // imported custom hook to get restaurant data
  const restaurant = useRestaurantMenu(id);
  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <section className="bg-gray-900  h-72 flex items-center pl-52">
        <img
          className="h-44 w-72"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
        <div className="flex flex-col px-16 ">
          <p className="text-white text-3xl">{restaurant?.name}</p>
          <p className="text-gray-400 text-sm py-2 pt-3">
            {restaurant.cuisines.join(", ")}
          </p>
          <p className="text-gray-400 text-sm ">
            {restaurant.city}, {restaurant.area}
          </p>
          <div className="flex py-3 pt-4">
            <div className="pr-5 border-gray-50 border-r">
              <p className="text-white ">
                <FaStar className="relative inline mr-1 -top-0.5 " />
                {restaurant.avgRating}
              </p>
              <p className="text-gray-400 text-xs ">
                {restaurant.totalRatingsString}
              </p>
            </div>
            <div className="px-4 border-gray-50 border-r">
              <p className="text-white">{restaurant.sla.deliveryTime} mins</p>
              <p className="text-gray-400 text-xs ">Delivery Time</p>
            </div>
            <div className="px-4">
              <p className="text-white">{restaurant.costForTwo / 100}</p>
              <p className="text-gray-400 text-xs ">Cost for two</p>
            </div>
          </div>
        </div>
        <div className="relative border border-gray-200">
          <p></p>
          <p></p>
        </div>
      </section>
      <div>{/* <h1>Restaurant id:{id}</h1> */}</div>
      <div>
        {/* menu */}
        <section className="pr-56 pl-56 flex ">
          <div className="p-10 pr-10 border-r h-screen w-80">
            {restaurant.menu?.widgets?.map((item) => (
              <button
                className="block text-sm my-1 hover:text-orange-400 "
                key={item.id}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="pt-10 w-[450px] ml-9">
            {Object.values(restaurant?.menu?.items).map((item) => (
              <span
                key={item.id}
                className="flex py-3 border-b justify-between"
              >
                <span>
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-xs pt-2 font-bold">₹ {item.price / 100}</p>
                  <p className="">{}</p>
                </span>
                <span className="">
                  <img
                    className="w-32 h-24 rounded-md"
                    src={IMG_CDN_URL + item.cloudinaryImageId}
                  />
                  <button
                    className="relative text-green-600 border font-bold text-xs w-20 h-8 ml-2 -top-6 left-4 bg-white "
                    onClick={() => handleAddItems(item)}
                  >
                    ADD
                  </button>
                </span>
              </span>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
export default RestaurantMenu;
