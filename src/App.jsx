import React, { useState } from 'react';
function App() {
  const [ color ,setColor ] = useState('red');
  return (

    <div className='h-screen w-screen duration-200' style={{ backgroundColor: color }}>
      <h1 className='text-4xl text-center pt-10'>{color.toString()}</h1>
       <div className='fixed bottom-12 flex flex-wrap justify-center gap-3 rounded-2xl bg-white p-4 shadow-lg ' style={{left:'25%'}}>
              <button className='py-2 px-4 rounded h-10 w-30' style={{ backgroundColor: 'red' }} onClick={()=>setColor('red')}>Red</button>
              <button className='py-2 px-4 rounded h-10 w-30 ' style={{ backgroundColor: 'blue' }} onClick={()=>setColor('blue')}>Blue</button>
              <button className='py-2 px-4 rounded h-10 w-30 ' style={{ backgroundColor: 'green' }} onClick={()=>setColor('green')}>Green</button>
              <button className='py-2 px-4 rounded h-10 w-30' style={{ backgroundColor: 'yellow' }} onClick={()=>setColor('yellow')}>Yellow</button>
              <button className='py-2 px-4 rounded h-10 w-30 ' style={{ backgroundColor: 'pink' }} onClick={()=>setColor('pink')}>Pink</button>
              <button className='py-2 px-4 rounded h-10 w-30 ' style={{ backgroundColor: 'lavender' }} onClick={()=>setColor('lavender')}>Lavender</button>
     </div>
    </div>
  )
}

export default App;
