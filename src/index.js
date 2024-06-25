import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const fname = "Dinesh";
const lname = "Yadav";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://picsum.photos/";

const heading = {
  color :'#fa9191',
  textTransform :'capitalize',
  textAlign :'center',
  fontFamily: '"Playwrite NZ", cursive',
  fontOpticalSizing: 'auto',
  fontWeight: 'bold',/* Or specify the desired weight, e.g., 700 */
  fontStyle: 'normal',
}

ReactDOM.render(
  <>
    <h1 style={{color :'#fa9191',
      textTransform :'capitalize',
      textAlign :'center', 
      fontFamily: '"Playwrite NZ", cursive',
      fontOpticalSizing: 'auto',
      fontWeight: 'bold',
      margin: '50px',
      fontStyle: 'normal'}}>
      my first name is {fname} and my last name {lname}
    </h1>
    
   <div className='img_div'>
   <img src={img1} alt='ramdom images'/> 
   <img src={img2} alt='ramdom images'/>
    <a href={link} target='_pihu'>
    <img src={img3} alt='ramdom images'/>
    </a>
   </div>
   

  </>,
  document.getElementById("root")
)