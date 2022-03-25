import { Price } from "./constants";

export default function getSpentInR1(items) {
  let spent = 0;
  items.forEach((item) => {
    switch (item.Item.split(" - ")[0]) {
      case "Oscorp":
        spent += Price.Oscorp * parseInt(item.Response);
        break;
      case "Stark":
        spent += Price.Stark * parseInt(item.Response);
        break;

      case "Daily Bugle":
        spent += Price.DailyBugle * parseInt(item.Response);
        break;

      case "Nelson & Murdoc":
        spent += Price.NelsonMurdock * parseInt(item.Response);
        break;

      default:
        spent += 0;
    }
  });
  return spent;
}
