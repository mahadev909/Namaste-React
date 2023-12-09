import { useState, useEffect } from "react";
import RestaurantCard, { discountRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  console.log("promoted", restaurantList);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9289592&lng=77.67837659999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setrestaurantList(
        json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json.data?.cards[5].card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    })();
  }, []);
  const DiscountedRestaurantCard = discountRestaurantCard(RestaurantCard);

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  console.log(searchText);
  if (onlineStatus === false) {
    return <h1>Seems like you have lost your connection</h1>;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search flex my-5">
          <input
            className="search-input mx-4 border-2 w-90 h-8 border-black "
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div>
            <button
              className="search-btn ml-2 bg-green-100 p-1.5 w-20 rounded-l"
              onClick={() => {
                const filteredSearch = restaurantList.filter((list) => {
                  return list.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilteredRestaurant(filteredSearch);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="items-center my-5 mx-3">
          <button
            className="filter-btn ml-2 bg-gray-300 p-1.5 w-100 rounded-lg"
            onClick={() => {
              const filteredData = restaurantList.filter((obj) => {
                return Number(obj.info.avgRating) > 4.1;
              });
              setFilteredRestaurant(filteredData);
            }}
          >
            Top Rated restaurant
          </button>
        </div>
      </div>
      <div className="restro-container flex flex-wrap">
        {/* whenever we apply a map we have to write a key(if not written key the a warning will throw in console and this will impact the performance) and key is reserve keyword and the key must be unique  */}
        {filteredRestaurant.map((Restaurant) => (
          <Link to={"/restaurants/" + Restaurant.info.feeDetails.restaurantId}>
            {Restaurant?.info?.aggregatedDiscountInfoV3?.subHeader ? (
              <DiscountedRestaurantCard resData={Restaurant}/>
            ) : (
              <RestaurantCard
                key={Restaurant.info.feeDetails.restaurantId}
                resData={Restaurant}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
