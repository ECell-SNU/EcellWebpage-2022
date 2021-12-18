import "../styles/base.scss";
export default function TextComponent(props){
    return(
        <div>
            <h5>{props.subheading}</h5>
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
        </div>
    )
}