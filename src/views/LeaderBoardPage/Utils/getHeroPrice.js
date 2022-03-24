import { herosPrice } from "./constants";


export default function getHeroPrice(name) {
  switch (name.split(" - ")[0]) {
    case "Spiderman":
      return herosPrice.spiderman;
    case "Hulk":
      return herosPrice.hulk;
    case "Black Panther":
      return herosPrice.blackpanther;
    case "Batman":
      return herosPrice.batman;
    case "Cyborg":
      return herosPrice.cyborg;
    case "Ultron":
      return herosPrice.ultron;
    case "Kingpin":
      return herosPrice.kingpin;
    case "Lex Luthor":
      return herosPrice.lexLuthor;
    case "Amanda Waller":
      return herosPrice.amandaWaller;
    case "Harvey Dent/ Two Face":
      return herosPrice.HarveyDent;
    case "None":
      return 0;
    default:
      return 0;
  }
}
