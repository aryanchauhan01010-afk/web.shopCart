import React from 'react'

function Conditional() {
   const isloogin = true;
    
      if(isloogin){
        return <h1>WELCOME Man</h1> 
      }else{
        return <h1>Please Login</h1>
      }
}

export default Conditional
