import useFetchAPI from "../../hooks/useFetchAPI";
import LeaderBoardBar from "../LandingPage/Components/LeaderBoardBar/LeaderBoardBar";
import "./LeaderBoardPage.scss";

export default function LeaderBoardPage() {
  const teamDetails = function (name, revenue) {
    this.name = name;
    this.revenue = revenue;
  };

  teamDetails.prototype.Acquisition = function (superHero) {
    switch (superHero) {
      case "Spiderman":
        this.revenue += 2000;
    }
    return this;
  };

  const Team1 = new teamDetails("Yankiees", 85000);
  const Team2 = new teamDetails("Auburn", 85000);
  const Team3 = new teamDetails("Texas", 85000);

  const TeamArray = [Team1, Team2, Team3];

  // const { isLoading, apiData } = useFetchAPI("fetchAll");
  console.log(TeamArray);

  // eslint-disable-next-line
  // const formOutputs = apiData.Situation1Items[0].Responses;
  // console.log(JSON.parse(formOutputs)[0].Response[0]);
  // console.log(apiData);
  TeamArray.forEach((team) => {
    console.log(team.Acquisition());
  });

  return (
    <div className="LeaderBoardPageWrapper">
      <div className="LeaderBoardPageWrapper__Content">
        {/* <LeaderBoardBar teamName={Team1.name} teamScore={Team1.revenue} />
        <LeaderBoardBar teamName={Team2.name} teamScore={Team2.revenue} />
        <LeaderBoardBar teamName={Team3.name} teamScore={Team3.revenue} /> */}
        {TeamArray.map((team, index) => (
          <LeaderBoardBar
            position={index + 1}
            teamName={team.name}
            teamScore={team.revenue}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
