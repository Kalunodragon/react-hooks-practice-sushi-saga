import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ props, callback }) {
  const [first, setFirst] = useState(0)
  /*
    created_at: "2018-07-27T18:53:16.241Z"
    id: 1
    img_url: "./sushi/maguro.png"
    name: "Maguro Magic"
    price: 20
  */

  const sushiList = props.map(sushi => {
    return (
      <Sushi
        name={sushi.name}
        image={sushi.img_url}
        price={sushi.price}
        key={sushi.created_at}
        callback={callback}
      />
    )
  })

  const sushiListRefined = sushiList.slice(first, (first + 4))

  function handleMore(){
    setFirst(number => number + 5)
  }

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushiListRefined}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
