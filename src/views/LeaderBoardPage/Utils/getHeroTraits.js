import { situation1HeroTraits } from "./constants";

export default function getHeroTraits(name) {
  switch (name.split(" - ")[0]) {
    case "Spiderman":
      return situation1HeroTraits.spiderman;
    case "Hulk":
      return situation1HeroTraits.hulk;
    case "Black Panther":
      return situation1HeroTraits.blackpanther;
    case "Batman":
      return situation1HeroTraits.batman;
    case "Cyborg":
      return situation1HeroTraits.cyborg;
    case "Ultron":
      return situation1HeroTraits.ultron;
    case "Kingpin":
      return situation1HeroTraits.kingpin;
    case "Lex Luthor":
      return situation1HeroTraits.lexLuthor;
    case "Amanda Waller":
      return situation1HeroTraits.amandaWaller;
    case "Harvey Dent/ Two Face":
      return situation1HeroTraits.HarveyDent;
    case "None":
      return [];
    default:
      return [];
  }
}
