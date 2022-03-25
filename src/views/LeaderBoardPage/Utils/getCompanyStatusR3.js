import { companyStatusR3 } from "./constants";

export default function getCompanyStatusR3(name) {
  switch (name.split(" - ")[0]) {
    case "Oscorp":
      return companyStatusR3.Oscorp;
    case "Stark":
      return companyStatusR3.Stark;
    case "Daily Bugle":
      return companyStatusR3.DailyBugle;
    case "Nelson & Murdoc":
      return companyStatusR3.NelsonMurdock;
    default:
      return 0;
  }
}
