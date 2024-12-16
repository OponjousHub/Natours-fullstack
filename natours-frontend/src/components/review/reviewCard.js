import ItemCard from "../item-card";
import SeaImg from "../../img/tours/tour-2-cover.jpg";
import ForestImg from "../../img/tours/tour-1-cover.jpg";
import SnowImg from "../../img/tours/tour-3-cover.jpg";
import CityImg from "../../img/tours/tour-4-cover.jpg";

function ReviewCard() {
  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic,`;
  const titles = [
    "The sea Explorer inside the ocean",
    "The forest hicker",
    "The snow adventurer",
    "The city wanderer",
  ];
  return (
    <>
      <ItemCard
        seaImg={SeaImg}
        ForestImg={ForestImg}
        SnowImg={SnowImg}
        CityImg={CityImg}
        text={text}
        title={titles}
      />
    </>
  );
}
export default ReviewCard;
