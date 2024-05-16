
import React, { useEffect, useState } from "react";
import styled from "styled-components";

//create your first component
const Semaforo = () => {
	
	const [colorSelect, setColorSelect] = useState("black");


	return (
		<div className="container" >
			<div className="semaforo">
				<div id="luzRojo" 
					className={`circulo ${colorSelect === "red" ? "rojo" : ""}`} 
					onClick={() => setColorSelect("red")} >
				</div>

				<div id="luzAmarillo" 
					className={`circulo ${colorSelect === "yellow" ? "amarillo" : ""}`}
					onClick={() => setColorSelect("yellow")}>
				</div>

				<div id="luzVerde" 
					className={`circulo ${colorSelect === "green" ? "verde" : ""}`}
					onClick={() =>setColorSelect("green")}>
				</div>
			</div>
		</div>
	);
};

export default Semaforo;
