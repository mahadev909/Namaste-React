import { useState } from "react";
import ItemCards from "./ItemCard";
const RestaurantCategory = ( {categoryData})=>{
    const [showItems, setShowItems] = useState(false);
    return<div>
        <div className="w-6/12 m-auto">
          <div
            className=" bg-gray-100 flex justify-between p-4 my-4"
            onClick={() => {
              return showItems ? setShowItems(false) : setShowItems(true);
            }}
          >
            <div>
              {categoryData.title} (
              {categoryData.itemCards.length})
            </div>
            <div>⬇️</div>
          </div>
          {showItems && (
            <ItemCards cardData={categoryData.itemCards} />
          )}
        </div>
    </div>
}

export default RestaurantCategory;