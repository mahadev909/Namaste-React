import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import {useDispatch} from 'react-redux';

const ItemCards = (props) => {
  const { cardData } = props;
  const dispatch = useDispatch();
  const handleClick = (card) =>{
    dispatch(addItems(card));
  }
  console.log('cartData', props);
  return (
    <div>
      {cardData?.map((card) => {
        return (
          <div className="border-b-2 border-gray-100 text-left m-2 flex bg-gray-100">
            <div className="ml-3 w-9/12">
              <div>{card.card?.info.name}</div>
              <div>
                ₹
                {card.card?.info.price
                  ? card.card?.info.price / 100
                  : card.card?.info.defaultPrice / 100}
              </div>
              <div className="mb-2 text-gray-500 text-sm">
                {card.card?.info.description}
              </div>
            </div>
            <div className=" w-3/12 mb-4">
            <button className="absolute ml-20 mt-[131px] rounded-lg p-1 bg-gray-200" onClick={()=>handleClick(card)}>Add +</button>
              <img
                className="my-2 "
                src={CDN_URL + card.card.info.imageId}
                alt="loading..."
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCards;
