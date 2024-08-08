import './Home.css'
import Box from './Box';
import crop from '../Images/module1.jpg'

function Home(){
      
    return(
        <div className='Home'>
            <Box name="Crop Recomendation"/>
            
            <img src={crop} alt="hiiii"></img>
        </div>
    );
}

export default Home;