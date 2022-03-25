import { companyStatusR1 } from "./constants";

export default function getCompanyStatusR1(name) {
  switch (name.split(" - ")[0]) {
    case "Oscorp":
      return companyStatusR1.Oscorp;
    case "Stark":
      return companyStatusR1.Stark;
    case "Daily Bugle":
      return companyStatusR1.DailyBugle;
    case "Nelson & Murdoc":
      return companyStatusR1.NelsonMurdock;
    default:
      return 0;
  }
}
