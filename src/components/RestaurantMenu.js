import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom'

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const {resId} = useParams();
  console.log('megha', resId);
  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9289592&lng=77.67837659999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setresInfo(json.data);
    })();
  }, [resId]);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const restaurantInfo = resInfo?.cards[0]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = restaurantInfo;
  const MenuItems =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
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
            <li>RS {menu?.card?.info?.price/100}</li>
            <li>{menu?.card?.info?.description}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
