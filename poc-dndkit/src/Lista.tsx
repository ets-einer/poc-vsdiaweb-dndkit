import { useState } from 'react';

const Raia1={
    elementos:[
        "Miura",
        "Vini",
        "Prates"
    ],
    id:1
}

const Raia2={
    elementos:[
        "Abe",
        "Balta",
        "icaro"
    ],
    id:2
}

export function Lista(){
    const [listaRaias, setRaias] = useState([Raia1, Raia2]);

    return{listaRaias, setRaias}
}