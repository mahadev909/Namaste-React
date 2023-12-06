import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await fetch(
        RESTAURANT_MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setResData(json.data);
    })();
  }, [resId]);

  return resData;
};

export default useRestaurantMenu;
