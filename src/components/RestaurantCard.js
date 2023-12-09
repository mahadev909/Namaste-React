import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  return (
    <div className="m-4 p-4 w-52 bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2">{name}</h3>
      <h5 className="text-ellipsis overflow-hidden ...">
        {cuisines.join(",")}
      </h5>
      <h5>{avgRating} star</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} min</h5>
    </div>
  );
};

export const discountRestaurantCard = (RestaurantCard) => {
  return (props) => {
    console.log('props', props);
    const {header, subHeader} = props?.resData?.info?.aggregatedDiscountInfoV3
    return (
      <div className="no-underline">
        <h3 className="font-bold mx-9 absolute my-4 bg-white ">{header+" "+subHeader}</h3>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
