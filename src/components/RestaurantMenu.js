import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauranrMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  console.log('resData', resData);
  if (resData === null) {
    return <Shimmer />;
  }
  const restaurantInfo = resData?.cards[0]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = restaurantInfo;
  const MenuItems =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  return (
    <div className="Restaurant-Menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      {MenuItems?.map((menu) => {
        return (
          <ul>
            <li>{menu?.card?.info?.name}</li>
            <li>RS {menu?.card?.info?.price / 100}</li>
            <li>{menu?.card?.info?.description}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
