import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauranrMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  if (resData === null) {
    return <Shimmer />;
  }
  const restaurantInfo = resData?.cards[0]?.card?.card?.info;
  const { name, cuisines } = restaurantInfo;
  const Categories =
    resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const filteredCategories = Categories.filter(
    (itemcategory) =>
      itemcategory?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="Restaurant-Menu text-center">
      <h1 className="font-bold mt-6 text-2xl">{name}</h1>
      <p className="font-bold mt-2 text-xl">{cuisines.join(",")}</p>
      {filteredCategories.map((categoryItem) => (
        <RestaurantCategory categoryData={categoryItem.card.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
