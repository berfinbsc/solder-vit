import React, { useEffect, useState } from 'react';

import Slider from '@mui/material/Slider';

function Page(){
    const[kilo,setKilo]=useState();
    const[boy,setBoy]=useState();
    const[kitle,setKitle]=useState();
    const[message,setMessage]=useState('Go Dady!!');


    const handleKiloChange = (event, newValue) => {
        setKilo(newValue); 
      };
    
      const handleBoyChange = (event, newValue) => {
        setBoy(newValue); 
      };
useEffect(()=>{
   const b = boy*boy;
        setKitle(kilo/b);
      

},[boy,kilo])

useEffect(()=>{
    if(kitle>25)
    setMessage("Hadi iyisin şişkoo..")
else if(kitle<18)
setMessage("Hadi iyisi çöp şiş..")
else if(kitle>18 && kitle<25)
{setMessage("Hadi askere :D")}

},[kitle])

    
return(

    <>
    Kilo :{kilo}
<Slider
  size="small"
  defaultValue={0}
  aria-label="Temperature"
  valueLabelDisplay="auto"
  min={40}
  max={200}
  value={kilo}
  onChange={handleKiloChange}
/>
Boy :{boy}
<Slider
  size="small"
  defaultValue={0}
  aria-label="Temperature"
  valueLabelDisplay="auto"
  min={1.6}
  step={0.05}
  max={3.1}
  value={boy}
  onChange={handleBoyChange}
/>
{message}
<br />
{kitle}


    </>



)


}

export default Page



