import { useEffect, useState } from "react";
import useFetchAPI from "../../hooks/useFetchAPI";
import LeaderBoardBar from "../LandingPage/Components/LeaderBoardBar/LeaderBoardBar";
import "./LeaderBoardPage.scss";
import getCompanyCost from "./Utils/getCompanyCost";
import getHeroPrice from "./Utils/getHeroPrice";
import getSpentInR1 from "./Utils/getSpentInR1";
import getSpentInR2 from "./Utils/getSpentInR2";

export default function LeaderBoardPage() {
  const BALANCE = 100000;

  const { isLoading, apiData } = useFetchAPI("fetchAll");

  const [investmentItems, setInvestmentItems] = useState([]);
  const [acquisitionItems, setAcquisitionItems] = useState([]);

  const balanceSheet = {};

  useEffect(() => {
    if (apiData) {
      setInvestmentItems(apiData["investmentItems"]);
      setAcquisitionItems(apiData["AcquisitionItems"]);
    }
  }, [apiData]);

  return (
    <div className="LeaderBoardPageWrapper">
      <div className="LeaderBoardPageWrapper__Content">
        <h2>Investment Round</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Oscorp</th>
              <th>Stark</th>
              <th>Daily Bugle</th>
              <th>Nelson & Murdock</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {investmentItems.map((response, index) => {
              const Responses = JSON.parse(response.Responses);
              balanceSheet[response.Mail] = BALANCE - getSpentInR1(Responses);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{response.Mail}</td>
                  {Responses.map((item) => (
                    <td key={item.Item}>
                      {item.Response} * {getCompanyCost(item.Item)}
                    </td>
                  ))}
                  <td>{balanceSheet[response.Mail]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />
        <h2>Acquisition Round</h2>

        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Super hero 1</th>
              <th>Super hero 2</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {acquisitionItems.map((response, index) => {
              const Responses = JSON.parse(response.Responses)[0].Response;
              balanceSheet[response.Mail] =
                balanceSheet[response.Mail] - getSpentInR2(Responses);

              if (balanceSheet[response.Mail]) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{response.Mail}</td>
                    {Responses.map((hero, index) => {
                      const heroName = hero.split(" - ")[0];
                      return (
                        <td key={index}>
                          {heroName}({getHeroPrice(heroName)})
                        </td>
                      );
                    })}
                    {Responses.length === 1 && <td></td>}
                    <td>{balanceSheet[response.Mail]}</td>
                  </tr>
                );
              } else {
                return <></>;
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
