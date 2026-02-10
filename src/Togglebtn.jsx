import React, { useState } from "react";

function Togglebtn() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>
        {showText ? "Hide Text" : "Show Text"}
      </button>

     
      {showText && <p>WELCOME THE LEGEND MAN</p>}
    </div>
  );
}

export default Togglebtn;
