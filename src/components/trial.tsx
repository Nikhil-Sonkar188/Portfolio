import profilePlaceholder from "@/assets/profile-placeholder.png";
import './trial.css'



export function Trial() {
    return (
        <div className="container">
            <div className="box">
                <div className="circle">
                    <img src={profilePlaceholder} />
                </div>
                <img src={profilePlaceholder}  />
            </div>
        </div>
    );
}