import useFetchAPI from "../../hooks/useFetchAPI";
import LeaderBoardBar from "../LandingPage/Components/LeaderBoardBar/LeaderBoardBar";
import "./LeaderBoardPage.scss";

export default function LeaderBoardPage() {
  const { isLoading, apiData } = useFetchAPI("fetchAll");

  // eslint-disable-next-line
  const formOutputs = apiData.Situation1Items[0].Responses;
  console.log(JSON.parse(formOutputs)[0].Response[0]);
  console.log(isLoading);
  return (
    <div className="LeaderBoardPageWrapper">
      {/* {isLoading ? "Data Loading" : JSON.stringify(apiData)} */}
      <div className="LeaderBoardPageWrapper__Content">
        <LeaderBoardBar
          position="1"
          teamName={JSON.parse(formOutputs)[0].Response[0]}
          teamScore={
            JSON.parse(formOutputs)[0].Response[0] === "Spiderman"
              ? 7500 - 10
              : 7500
          }
          companyStock1="1"
          companyStock2="10"
          companyStock3="12"
          companyStock4="18"
        />
      </div>
    </div>
  );
}
