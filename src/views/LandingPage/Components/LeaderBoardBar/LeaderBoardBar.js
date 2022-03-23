import "./LeaderBoardBar.scss";
export default function LeaderBoardBar(props) {
  return (
    <div className="LeaderBoardBarWrapper">
      <p className="LeaderBoardBarWrapper__positionPlace">{props.position}</p>
      <p className="LeaderBoardBarWrapper__teamName">{props.teamName}</p>
      <p className="LeaderBoardBarWrapper__teamScore">{props.teamScore}</p>
      <ul className="LeaderBoardBarWrapper__companyStocks">
        <li className="LeaderBoardBarWrapper__companyStocks__stockNumber">
          {props.companyStock1}
        </li>
        <li className="LeaderBoardBarWrapper__companyStocks__stockNumber">
          {props.companyStock2}
        </li>
        <li className="LeaderBoardBarWrapper__companyStocks__stockNumber">
          {props.companyStock3}
        </li>
        <li className="LeaderBoardBarWrapper__companyStocks__stockNumber">
          {props.companyStock4}
        </li>
      </ul>
    </div>
  );
}
