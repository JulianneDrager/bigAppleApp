import ReviewPipeFittings from "./ReviewPipeFittings";
import ReviewPipes from "./ReviewPipes";

const ReviewPipeMaterial = ({
  totalPipePrice,
  setTotalPipePrice,
  totalElbowPrice,
  setTotalElbowPrice,
  totalTeePrice,
  setTotalTeePrice,
}) => {
  return (
    <>
      <ReviewPipes
        totalPipePrice={totalPipePrice}
        setTotalPipePrice={setTotalPipePrice}
      />
      <ReviewPipeFittings
        totalElbowPrice={totalElbowPrice}
        setTotalElbowPrice={setTotalElbowPrice}
        totalTeePrice={totalTeePrice}
        setTotalTeePrice={setTotalTeePrice}
      />
    </>
  );
};
export default ReviewPipeMaterial;
