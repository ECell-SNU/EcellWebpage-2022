import { companyStatusR2 } from "./constants";

export default function getCompanyStatusR2(name) {
  switch (name.split(" - ")[0]) {
    case "Oscorp":
      return companyStatusR2.Oscorp;
    case "Stark":
      return companyStatusR2.Stark;
    case "Daily Bugle":
      return companyStatusR2.DailyBugle;
    case "Nelson & Murdoc":
      return companyStatusR2.NelsonMurdock;
    default:
      return 0;
  }
}
