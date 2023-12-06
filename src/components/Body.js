import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus'

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

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

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  console.log(searchText);
  if(onlineStatus === false){
    return <h1>Seems like you have lost your connect</h1>
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-input"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurantList.filter((obj) => {
              return Number(obj.info.avgRating) > 4.0;
            });
            setFilteredRestaurant(filteredData);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="restro-container">
        {/* whenever we apply a map we have to write a key(if not written key the a warning will throw in console and this will impact the performance) and key is reserve keyword and the key must be unique  */}
        {filteredRestaurant.map((Restaurant) => (
          <Link to={"/restaurants/"+Restaurant.info.feeDetails.restaurantId}>
            <RestaurantCard
              key={Restaurant.info.feeDetails.restaurantId}
              resData={Restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
