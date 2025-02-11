import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/thankYouNote.svg";

const SpecialNote = () => {
    return (
      <Wrapper>
        <div style={{marginTop:'-7rem'}}>
          <img src={img} alt="thank you" />
          <h3>Thank You Nime !!</h3>
          <p>for inspiring me to complete this Project</p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );

};
export default SpecialNote;
