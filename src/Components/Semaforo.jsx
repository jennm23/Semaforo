import React, { useState } from 'react';

const Semaforo = () => {
  const [color, setColor] = useState("rojo");

  return (
    <div>
      <div id='Sostenedor'></div>
    <div id="contenedor" style={{ width: '100px', margin: '0 auto' }}>
      <div className={`rojo luz ${color === "rojo" ? "brillo" : ""}`} onClick={() => setColor("rojo")}
        style={{ backgroundColor: 'red', width: '80px', height: '80px', borderRadius: '50%', margin: '10px auto', opacity: color === "rojo" ? 1 : 0.4,
          transition: 'opacity 0.5s', }}>
      </div>
      <div className={`amarillo luz ${color === "amarillo" ? "brillo" : ""}`} onClick={() => setColor("amarillo")}
        style={{ backgroundColor: 'yellow', width: '80px', height: '80px', borderRadius: '50%', margin: '10px auto', opacity: color === "amarillo" ? 1 : 0.4, }}>
      </div>
      <div className={`verde luz ${color === "verde" ? "brillo" : ""}`} onClick={() => setColor("verde")} style={{ backgroundColor: 'green', width: '80px', height: '80px', borderRadius: '50%', margin: '10px auto', opacity: color === "verde" ? 1 : 0.4, }}>
      </div>
    </div>
    </div>
  );
};

export default Semaforo;
