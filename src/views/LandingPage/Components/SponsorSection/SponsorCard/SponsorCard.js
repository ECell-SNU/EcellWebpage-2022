import "./SponsorCard.scss";

function SponsorCard({ src }) {
  return (
    <div className="SponsorCard">
      <img src={src} alt="Sponsor" />
    </div>
  );
}

export default SponsorCard;
