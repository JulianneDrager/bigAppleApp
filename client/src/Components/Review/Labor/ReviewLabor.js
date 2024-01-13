import ReviewMenAndHours from "./ReviewMenAndHours";

const ReviewLabor = ({ price, setPrice, finalTotal }) => {
  return (
    <>
      <ReviewMenAndHours
        price={price}
        setPrice={setPrice}
        finalTotal={finalTotal}
      />
    </>
  );
};
export default ReviewLabor;
