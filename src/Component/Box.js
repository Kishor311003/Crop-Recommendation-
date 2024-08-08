import './Box.css';
import {useNavigate} from 'react-router-dom';
function Box(props){
    const navigate=useNavigate();
    function goToRecom(){
        if(props.name==="Crop Recomendation"){
            navigate("/rec")
        }
        
       
    }
    return(
        <div className="Box" onClick={goToRecom}>
            <h1>{props.name}</h1>
        </div>
    );
}

export default Box;
