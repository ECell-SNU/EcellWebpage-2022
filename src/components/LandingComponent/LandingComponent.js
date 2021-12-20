import "./LandingComponent.scss";
export default function LandingComponent(){
    return (
    <div className="Title-container">
        <h1 className="Title-container__Title">
            A platform for students and faculty to
             <span className="Title-container__Title__Rotater">&nbsp;create .</span>
        </h1>
        <p className="Title-container__Description">
            E-cell Shiv Nadar University strives to provide a platform for 
            students and faculty to create, innovate, incubate and realize 
            their entrepreneurial dreams
        </p>
        <div className="Title-container__Button-container">
            <button className="Title-container__Button-container__Button" >Our Team</button>
            <button className="Title-container__Button-container__Button" >Learn More</button>
        </div>
    </div>
    );
}