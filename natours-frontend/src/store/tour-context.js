import { createContext, useState } from "react";
import { DUMMY_REVIEW } from "../components/review/dummy-review";

export const TourContext = createContext({
  tour: [],
  addReview: () => {},
  getReview: [],
});

function TourContextProvider({ children }) {
  const [storReviews, setStoreReviews] = useState([DUMMY_REVIEW]);

  const handleAddReviews = (review) => {
    setStoreReviews((prevState) => {
      return { review, ...prevState };
    });
  };

  console.log(storReviews);

  const tourCXTValue = {
    addReview: handleAddReviews,
    getReview: storReviews,
  };
  return (
    <TourContext.Provider value={tourCXTValue}>{children}</TourContext.Provider>
  );
}
export default TourContextProvider;
