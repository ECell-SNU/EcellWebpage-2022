import { herosPrice } from "./constants";

export default function getSpentInR2(items) {
  let spent = 0;

  items.forEach((item) => {
    switch (item.split(" - ")[0]) {
      case "Spiderman":
        spent += herosPrice.spiderman;
        break;
      case "Hulk":
        spent += herosPrice.hulk;
        break;
      case "Black Panther":
        spent += herosPrice.blackpanther;
        break;
      case "Batman":
        spent += herosPrice.batman;
        break;
      case "Cyborg":
        spent += herosPrice.cyborg;
        break;
      case "Ultron":
        spent += herosPrice.ultron;
        break;
      case "Kingpin":
        spent += herosPrice.kingpin;
        break;
      case "Lex Luthor":
        spent += herosPrice.lexLuthor;
        break;
      case "Amanda Waller":
        spent += herosPrice.amandaWaller;
        break;
      case "Harvey Dent/ Two Face":
        spent += herosPrice.HarveyDent;
        break;
      case "None":
        spent += 0;
        break;
      default:
        spent += 0;
        break;
    }
  });
  return spent;
}
