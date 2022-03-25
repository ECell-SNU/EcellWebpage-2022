import { Price } from "./constants";

export default function getCompanyCost(name) {
  switch (name.split(" - ")[0]) {
    case "Oscorp":
      return Price.Oscorp;
    case "Stark":
      return Price.Stark;
    case "Daily Bugle":
      return Price.DailyBugle;
    case "Nelson & Murdoc":
      return Price.NelsonMurdock;
    default:
      return 0;
  }
}
