import React, { useState } from "react";

function Sushi({ name, image, price, callback }) {
  const [ avaliable, setAvaliable ] = useState(true)

  function handleClick(){
    if(avaliable){
      callback(price)
      setAvaliable(state => !state)
    } else {
      window.alert("Sorry the sushi you are looking for has already been eaten!")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {avaliable ? (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        ) : null}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
