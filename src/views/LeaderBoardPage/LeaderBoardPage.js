import useFetchAPI from "../../hooks/useFetchAPI";
import LeaderBoardBar from "../LandingPage/Components/LeaderBoardBar/LeaderBoardBar";
import "./LeaderBoardPage.scss";

export default function LeaderBoardPage() {
  const { isLoading, apiData } = useFetchAPI("fetchAll");

  console.log(apiData);

  return (
    <div className="LeaderBoardPageWrapper">
      {/* {isLoading ? "Data Loading" : JSON.stringify(apiData)} */}
      <LeaderBoardBar
        position="1"
        teamName="Auburn"
        teamScore="$75000"
        companyStock1="1"
        companyStock2="10"
        companyStock3="12"
        companyStock4="18"
      />
    </div>
  );
}
