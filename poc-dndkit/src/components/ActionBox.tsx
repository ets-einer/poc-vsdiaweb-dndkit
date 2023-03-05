import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Gear from './img/icons8-settings-24.png';

export const ActionBox = ({ id, dragOverlay, opacidade }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [color, setColor] = useState('gray');
  const style = {
    cursor: dragOverlay ? "grabbing" : "grab",
  };
  function openModal(e:any){
    switch (e.detail) {
      case 1:
        break;
      case 2:
        alert("Modal");
        break;
      case 3:
        break;
    }
  }
  if(!id.includes("-")){
  return (
    <div style={style} onClick={openModal} className={opacidade+"w-80 h-48 bg-gray-300 rounded-lg ml-24"}>
        <div className=" border-b border-black flex flex-row justify-between"> 
        <div className="ml-2 mt-2 mb-2">
             {id}
        </div>
          <div onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)} > 
          <div className={`z-50 w-[60px] h-full rounded-tr-lg border-black bg-${color}-500 top-0 left-[16.25rem]`}>
          <Popover>
            <Transition show={isShowing}>
              <Popover.Panel>
                <div className="absolute flex flex-col mt-6 gap-1 bg-white p-2 rounded-lg">
                  <button className='w-4 h-4 rounded-full bg-green-500 cursor-pointer' onClick={() => setColor('green')}></button>
                  <button className='w-4 h-4 rounded-full bg-yellow-500 cursor-pointer' onClick={() => setColor('yellow')}></button>
                  <button className='w-4 h-4 rounded-full bg-red-500 cursor-pointer' onClick={() => setColor('red')}></button>
                  <button className='w-4 h-4 rounded-full bg-gray-500 hidden'></button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          </div>
          </div>
        </div>
        <div className="p-2">
          <textarea placeholder="Descrição..." maxLength={154} className="bg-gray-300 w-72 h-24 placeholder-black outline-none resize-none" disabled/>
        </div>
        <div className="flex flex-row pl-2 justify-end">
      
          <div>
            <input type="text" placeholder="Tempo" maxLength={10} className="bg-gray-300 text-right mr-4 placeholder-black w-24 h-6 outline-none" disabled/>
          </div>
        </div>
    </div>
  
  );
  }else{
    return (
      <div style={style} onClick={openModal} className={"opacity-50 w-80 h-48 bg-gray-300 rounded-lg ml-24"}>
          <div className=" border-b border-black flex flex-row justify-between"> 
          <div className="ml-2 mt-2 mb-2">
               {id}
          </div>
            <div onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)} > 
            <div className={`z-50 w-[60px] h-full rounded-tr-lg border-black bg-${color}-500 top-0 left-[16.25rem]`}>
            <Popover>
              <Transition show={isShowing}>
                <Popover.Panel>
                  <div className="absolute flex flex-col mt-6 gap-1 bg-white p-2 rounded-lg">
                    <button className='w-4 h-4 rounded-full bg-green-500 cursor-pointer' onClick={() => setColor('green')}></button>
                    <button className='w-4 h-4 rounded-full bg-yellow-500 cursor-pointer' onClick={() => setColor('yellow')}></button>
                    <button className='w-4 h-4 rounded-full bg-red-500 cursor-pointer' onClick={() => setColor('red')}></button>
                    <button className='w-4 h-4 rounded-full bg-gray-500 hidden'></button>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            </div>
            </div>
          </div>
          <div className="p-2">
            <textarea placeholder="Descrição..." maxLength={154} className="bg-gray-300 w-72 h-24 placeholder-black outline-none resize-none" disabled/>
          </div>
          <div className="flex flex-row pl-2 justify-end">
        
            <div>
              <input type="text" placeholder="Tempo" maxLength={10} className="bg-gray-300 text-right mr-4 placeholder-black w-24 h-6 outline-none" disabled/>
            </div>
          </div>
      </div>
    
    );
  }
};

{/* <div className="bg-gray-300 w-80 h-44 rounded-lg flex flex-col space-evenly py-2 px-3">
        
        <div className="gap-2">
          <div className="flex justify-between">
          <input
            type="text"
            placeholder="Nome..."
            className="bg-gray-300 placeholder:text-gray-600 p-1  text-black focus:outline-none"
          />
          <div onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)} >
          <div className={`z-50 w-4 h-4 rounded-full border-black bg-${color}-500`}>
                      <Popover>
                          <Transition show={isShowing}>
                              <Popover.Panel>
                                  <div className="absolute flex flex-col mt-6 gap-1 bg-white p-2 rounded-lg">
                                      <button className='w-4 h-4 rounded-full bg-green-500 cursor-pointer' onClick={() => setColor('green')}></button>
                                      <button className='w-4 h-4 rounded-full bg-yellow-500 cursor-pointer' onClick={() => setColor('yellow')}></button>
                                      <button className='w-4 h-4 rounded-full bg-red-500 cursor-pointer' onClick={() => setColor('red')}></button>
                                  </div>
                              </Popover.Panel>
                          </Transition>
                      </Popover>
                  </div> 
          </div>
          </div>
          <div><textarea maxLength="89" typeof="text" className="w-64 h-24 resize-none p-1 bg-gray-200" placeholder="Descrição..."></textarea></div>
        </div>
        <div>
          <input type="text"  
          placeholder="Tempo (Tipo)..."
          className="bg-gray-300 placeholder:text-gray-600 p-1  text-black focus:outline-none"/>
        </div>
      </div> */}


{/* <div>
   
        </div> */}


{
  /* <div className="w-48 h-48 flex flex-col bg-red-500">
            <div className="w-full h-28 flex flex-col bg-blue-600">
                <div className='w-full h-18 flex flex-row justify-between '>
                    <div className="w-2 h-2 bg-yellow-400"></div>
                    <div className="w-2 h-2 bg-red-900"></div>
                </div>
                <div className="w-full h-10 flex flex-row justify-center items-center">
                    <input type="text" className="w-full h-5 "/>
                </div>
            </div>
            <div className="w-full h-20 ">

            </div>
        </div> */
}

{
  /* <div className="w-full h-full flex flex-col justify-around">
            <div className="w-screen h-33 bg-slate-400"></div>
            <div className="w-screen h-33 bg-black"></div>
            <div className="w-screen h-33 bg-slate-400"></div>
        </div> */
}

{
  /* <div className='items-center'>
            <div className='w-64 h-48 border-4 border-indigo-600'>
            <div className='w-64 h-32 border-4 border-indigo-600'>
                <div><input placeholder='Ação' className='items-center'></input></div>
            </div>
            </div>
        </div> */
}
