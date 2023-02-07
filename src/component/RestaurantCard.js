// import { useContext } from "react";
// import userContext from "../utils/userContext";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  // const { user } = useContext(userContext);
  // const { name, cloudinaryImageId } = props.rest;
  return (
    <div className="box-border w-[300px] h-[330px] p-3 m-4 rounded-md   hover:border-2 border-black ">
      <img
        className="rounded-md h-[190px]"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating + " stars"}</p>
      {/* <p className="text-green-600">{user.name}</p>
      <p className="text-green-600">{user.email}</p> */}
    </div>
  );
};

export default RestaurantCard;
