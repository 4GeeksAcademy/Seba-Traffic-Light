import React, { useEffect, useState } from "react";

function App() {
  const [encendido, setEncendido] = useState("red")
  const [activar, setActivar] = useState(false)

  const changeColor = (color) => {
    setEncendido(color)
  }

  useEffect(() => {
    if (activar) {
      const interval = setInterval(() => {
        if (encendido == "red") {
          setEncendido("yellow")
        } else if (encendido == "yellow") {
          setEncendido("green")
        } else if (encendido == "green") {
          setEncendido("red")
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [activar, encendido])



  return (
    <main>
      <div className="p-box"></div>
      <div className="box-light">
        <div className={`red ${encendido == "red" ? "light-on" : ""}`} onClick={() => changeColor("red")}></div>
        <div className={`yellow ${encendido == "yellow" ? "light-on" : ""}`} onClick={() => changeColor("yellow")}></div>
        <div className={`green ${encendido == "green" ? "light-on" : ""}`} onClick={() => changeColor("green")}></div>
      </div>
      <button onClick={() => setActivar(!activar)}>Activar</button>
    </main>

  );
}

export default App;
