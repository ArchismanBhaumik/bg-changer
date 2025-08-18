import React, { useState,useEffect } from "react";
function App() {
  
  const [color, setColor] = useState("#ffffff");
  const [colors, setColors] = useState([]);

  useEffect(() => {
    let tempColors = [];
    for (let i = 0; i < 6; i++) {
      let col = prompt(`Enter color ${i + 1}:`);
      tempColors.push(col || "#ffffff"); // fallback if user cancels
    }
    setColors(tempColors);
    setColor(tempColors[0]); // set initial color
  }, []);

  function changeColor(index){
     let col = prompt(`Enter color ${index + 1}:`);
      if (col) {
        setColors(prev => {
          const updated = [...prev];
          updated[index] = col;
          return updated;
        });
        setColor(col); // also update background if needed
      }
  }
  
  return (
    <div
      className="h-screen w-screen duration-200"
      style={{
        backgroundColor: color,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1 className="text-4xl text-center pt-10">{color.toString()}</h1>
      <div className="fixed bottom-12 flex flex-wrap justify-center gap-3 rounded-2xl bg-white p-4  shadow-lg m-4">
        <button
          className="py-2 px-4 rounded h-10 w-30"
          style={{ backgroundColor: colors[0] }}
          onClick={() => setColor(colors[0])}
          onDoubleClick={() => changeColor(0)}
        >
          {colors[0]}
        </button>
        <button
          className="py-2 px-4 rounded h-10 w-30 "
          style={{ backgroundColor: colors[1] }}
          onClick={() => setColor(colors[1])}
          onDoubleClick={() => changeColor(1)}
        >
          {colors[1]}
        </button>
        <button
          className="py-2 px-4 rounded h-10 w-30 "
          style={{ backgroundColor: colors[2] }}
          onClick={() => setColor(colors[2])}
          onDoubleClick={() => changeColor(2)}
        >
          {colors[2]}
        </button>
        <button
          className="py-2 px-4 rounded h-10 w-30"
          style={{ backgroundColor: colors[3] }}
          onClick={() => setColor(colors[3])}
          onDoubleClick={() => changeColor(3)}
        >
          {colors[3]}
        </button>
        <button
          className="py-2 px-4 rounded h-10 w-30 "
          style={{ backgroundColor: colors[4] }}
          onClick={() => setColor(colors[4])}
          onDoubleClick={() => changeColor(4)}
        >
          {colors[4]}
        </button>
        <button
          className="py-2 px-4 rounded h-10 w-30 "
          style={{ backgroundColor: colors[5] }}
          onClick={() => setColor(colors[5])}
          onDoubleClick={() => changeColor(5)}
        >
          {colors[5]}
        </button>
      </div>
    </div>
  );
}


export default App;
