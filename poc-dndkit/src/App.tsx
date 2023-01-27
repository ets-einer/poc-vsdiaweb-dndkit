import { useState } from 'react'
import './App.css'
import { DndContext } from "@dnd-kit/core";

function App() {
  

  return (
   <div className='flex flex-col justify-center items-center'>
      <h1 className="font-bold text-2xl">POC VSDIA DND</h1>
      <DndContext>
        
      </DndContext>
      
   </div>
  )
}

export default App
