import React from "react";
import "./style.css";

export const Menu = (props) => {
  //   const cars = {
  //     car1: [
  //       {
  //         path: "models/car/car1/scene.gltf",
  //         scale: [0.005, 0.005, 0.005],
  //         position: [0, -0.035, 0],
  //         rotation: [0, 0, 0],
  //         name: "Corvette",
  //       },
  //     ],
  //     car2: [
  //       {
  //         path: "models/car/car2/scene.gltf",
  //         scale: [0.8, 0.8, 0.8],
  //         position: [0, -0.035, 0],
  //         rotation: [0, 89.5, 0],
  //         name: "Sci-Fi Cyber Punk Car",
  //       },
  //     ],
  //     car3: [
  //       {
  //         path: "models/car/car3/scene.gltf",
  //         scale: [0.3, 0.3, 0.3],
  //         position: [0, -0.3, 0],
  //         rotation: [0, 0, 0],
  //         name: "Cartoon Car",
  //       },
  //     ],
  //     car4: [
  //       {
  //         path: "models/car/car4/scene.gltf",
  //         scale: [2, 2, 2],
  //         position: [0, 0.7, 0],
  //         rotation: [0, 355, 0],
  //         name: "Alien Car",
  //       },
  //     ],
  //   };

  //   };

  return (
    <div className="menuu">
      <h1>Select Car</h1>
      <form>
        <select
          onChange={(event) => {
            props.setSelectedCar(() => {
              const arr = Object.keys(props.cars);
              for (let i = 0; i < Object.keys(props.cars).length; i++) {
                console.log(props.cars[arr[i]]);
                if (props.cars[arr[i]][4] === event.target.value) {
                  console.log(props.cars[arr[i]]);
                  return props.cars[arr[i]];
                }
              }
            });
          }}
        >
          {Object.keys(props.cars).map((car, i) => {
            return (
              <option key={props.cars[car][4]}>{props.cars[car][4]}</option>
            );
          })}
        </select>
      </form>
    </div>
  );
};
