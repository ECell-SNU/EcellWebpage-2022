import "./SponsorSection.scss";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import { useRecursiveTimeout } from "../../../../hooks/useRecursiveTimeout";
import LandingSectionTexts from "../../../../components/LandingSectionTexts/LandingSectionTexts";
import SponsorCard from "./SponsorCard/SponsorCard";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
    require.context("../../../../Assets/Sponsors", false, /\.(png|jpe?g|svg)$/)
  ),
  itemsToRender = [];
for (let x in images) {
  itemsToRender.push(<SponsorCard key={x} src={images[x].default} />);
}

export default function SponsorSection() {
  const AUTOPLAY_INTERVAL = 2000;
  const [sponsorSectionRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  const { play } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);
  useEffect(() => {
    play();
  }, [play]);

  return (
    <section id="SponsorSection" className="SponsorSection">
      <LandingSectionTexts classifier="Sponsors" />
      <div className="SponsorSection__Container" ref={sponsorSectionRef}>
        <div className="SponsorSection__contentContainer">{itemsToRender}</div>
      </div>
    </section>
  );
}
