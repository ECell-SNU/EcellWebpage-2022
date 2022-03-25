import { useEffect, useState } from "react";
import useFetchAPI from "../../hooks/useFetchAPI";
import LeaderBoardBar from "../LandingPage/Components/LeaderBoardBar/LeaderBoardBar";
import "./LeaderBoardPage.scss";
import {
  activeTraits,
  activeTraits2,
  companyStatusR1,
  situation1Traits,
} from "./Utils/constants";
import getCompanyCost from "./Utils/getCompanyCost";
import getCompanyStatusR1 from "./Utils/getCompanyStatusR1";
import getCompanyStatusR2 from "./Utils/getCompanyStatusR2";
import getHeroPrice from "./Utils/getHeroPrice";
import getHeroTraits from "./Utils/getHeroTraits";
import getSpentInR1 from "./Utils/getSpentInR1";
import getSpentInR2 from "./Utils/getSpentInR2";

export default function LeaderBoardPage() {
  const BALANCE = 100000;
  const NEW_BALANCE = 10000

  const { isLoading, apiData } = useFetchAPI("fetchAll");

  const [investmentItems, setInvestmentItems] = useState([]);
  const [investmentItemsR2, setInvestmentItemsR2] = useState([]);
  const [acquisitionItems, setAcquisitionItems] = useState([]);
  const [situation1, setSituation1] = useState([]);

  const balanceSheet = {};
  const companySheet = {};

  useEffect(() => {
    if (apiData) {
      setInvestmentItems(apiData["investmentItems"]);
      setInvestmentItemsR2(apiData["investment2Items"]);
      setAcquisitionItems(apiData["AcquisitionItems"]);
      setSituation1(apiData["Situation1Items"]);
    }
  }, [apiData]);
  // console.log(apiData);

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
              companySheet[response.Mail] = Responses;
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

              // console.log(
              //   response.Mail,
              //   getSpentInR2(Responses),
              //   balanceSheet[response.Mail] - getSpentInR2(Responses)
              // );

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

        <br />
        <h2>Situation 1</h2>

        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Super hero 1</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {situation1.map((response, index) => {
              let HeroName = JSON.parse(response.Responses)[0].Response;
              HeroName = JSON.parse(
                JSON.stringify(HeroName).replace("[", "").replace("]", "")
              );

              let traitEffect = 0;

              let stockStatus = 0;

              getHeroTraits(HeroName).forEach((trait) => {
                if (situation1Traits[trait] && activeTraits.includes(trait)) {
                  traitEffect += situation1Traits[trait];
                }
              });

              if (companySheet[response.Mail]) {
                companySheet[response.Mail].forEach((item) => {
                  stockStatus +=
                    getCompanyStatusR1(item.Item.split(" - ")[0]) *
                    item.Response;
                });
              }

              balanceSheet[response.Mail] =
                balanceSheet[response.Mail] + traitEffect + stockStatus + NEW_BALANCE;

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{response.Mail}</td>
                  <td>{HeroName}</td>
                  <td>{`${balanceSheet[response.Mail]}`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <br />
        <h2>Investment Round 2</h2>
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
            {investmentItemsR2.map((response, index) => {
              const Responses = JSON.parse(response.Responses);
              balanceSheet[response.Mail] =
                balanceSheet[response.Mail] - getSpentInR1(Responses);
              companySheet[response.Mail].forEach((element, index) => {
                Responses.forEach((item) => {
                  if (element.Item === item.Item) {
                    companySheet[response.Mail][index].Response =
                      parseInt(element.Response) + parseInt(item.Response);
                  }
                });
              });

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
        <h2>Situation 2</h2>

        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Super hero 1</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {situation1.map((response, index) => {
              let HeroName = JSON.parse(response.Responses)[0].Response;
              HeroName = JSON.parse(
                JSON.stringify(HeroName).replace("[", "").replace("]", "")
              );

              let traitEffect = 0;

              let stockStatus = 0;

              getHeroTraits(HeroName).forEach((trait) => {
                if (situation1Traits[trait] && activeTraits2.includes(trait)) {
                  traitEffect += situation1Traits[trait];
                }
              });

              if (companySheet[response.Mail]) {
                companySheet[response.Mail].forEach((item) => {
                  stockStatus +=
                    getCompanyStatusR2(item.Item.split(" - ")[0]) *
                    item.Response;
                });
              }

              balanceSheet[response.Mail] =
                balanceSheet[response.Mail] + traitEffect + stockStatus;

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{response.Mail}</td>
                  <td>{HeroName}</td>
                  <td>{`${balanceSheet[response.Mail]}`} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
