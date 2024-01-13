import ReviewPipeElbows from "./ReviewPipeElbows";
import ReviewPipeTees from "./ReviewPipeTees";

const ReviewPipeFittings = ({
  totalElbowPrice,
  setTotalElbowPrice,
  totalTeePrice,
  setTotalTeePrice,
}) => {
  return (
    <>
      <ReviewPipeElbows
        totalElbowPrice={totalElbowPrice}
        setTotalElbowPrice={setTotalElbowPrice}
      />
      <ReviewPipeTees
        totalTeePrice={totalTeePrice}
        setTotalTeePrice={setTotalTeePrice}
      />
    </>
  );
};
export default ReviewPipeFittings;
