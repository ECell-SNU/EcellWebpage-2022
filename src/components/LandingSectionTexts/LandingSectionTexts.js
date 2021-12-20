import "../LandingSectionTexts/LandingSectionTexts.scss";
export default function LandingSectionTexts(props){
    return (
        <div className="text-container">
          <h4 className="text-container__classifier">{props.classifier}</h4>
          <h1 className="text-container__title">{props.title}</h1>
          <p className="text-container__para para1">{props.content1}</p>
          <p className="para2">{props.content2}</p>
        </div>
      );
};