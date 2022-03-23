import useFetchAPI from "../../hooks/useFetchAPI";
import LeaderBoardBar from "../LandingPage/Components/LeaderBoardBar/LeaderBoardBar";
import "./LeaderBoardPage.scss";

export default function LeaderBoardPage() {
  const { isLoading, apiData } = useFetchAPI("https://nnbphj.deta.dev/get");
  return (
    <div className="LeaderBoardPageWrapper">
      {/* {isLoading ? "Data Loading" : JSON.stringify(apiData)} */}
      <LeaderBoardBar />
    </div>
  );
}
