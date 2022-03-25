import "./LeaderBoardBar.scss";
export default function LeaderBoardBar(props) {
  return (
    <div className="LeaderBoardBarWrapper">
      <p className="LeaderBoardBarWrapper__positionPlace">{props.position}</p>
      <p className="LeaderBoardBarWrapper__teamName">{props.teamName}</p>
      <p className="LeaderBoardBarWrapper__teamScore">{props.teamScore}</p>
      <p className="LeaderBoardBarWrapper__companyStocks__stockNumber">
        {props.companyStock1}
      </p>
      <p className="LeaderBoardBarWrapper__companyStocks__stockNumber">
        {props.companyStock2}
      </p>
      <p className="LeaderBoardBarWrapper__companyStocks__stockNumber">
        {props.companyStock3}
      </p>
      <p className="LeaderBoardBarWrapper__companyStocks__stockNumber">
        {props.companyStock4}
      </p>
    </div>
  );
}
