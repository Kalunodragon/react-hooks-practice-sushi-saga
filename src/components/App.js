import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [wallet, setWallet] = useState(200)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => setSushi(data))
  }, [])

  function callback(ammount) {
    if(wallet > ammount) {
      setWallet(total => total - ammount)
    } else {
      window.alert("Sorry looks like your wallet is a little bit light this time. Please come back when you have some more money.")
    }
  }

  return (
    <div className="app">
      <SushiContainer props={sushi} callback={callback}/>
      <Table wallet={wallet}/>
    </div>
  );
}

export default App;
