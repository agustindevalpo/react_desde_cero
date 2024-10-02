import React, { useEffect } from "react"
import './Test.css'

interface Props {
    children: React.ReactNode
}

const numbers = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
];

//Condicionales
const showNumbers = false;

// condicionales múltiples
const multipleConditionsInit = (itemToGet: number) => {
    const renderItems = new Map();
    renderItems.set(1, <p className="testH1Styles">uno</p>);
    renderItems.set(2, "dos");
    renderItems.set(3, "tres");

    return renderItems.has(itemToGet) ? renderItems.get(itemToGet): <p>No existe el número</p>
};


//DUM COMPONENT - Componente tonto , no tiene lógica, solo para estilar
export function Test({ children }: Props) {
    useEffect(() => {
        console.log('Test');
    }, [])

    return (
        <>
            <div className="testContainerStyles">
                {children}
                <h1 className="testH1Styles">Test</h1>
                {multipleConditionsInit(1)}
                {showNumbers ?
                    numbers.map((element) => (<p key={element.id}>{element.value}</p>))
                    : <p>No hay números</p>
                }

            </div>
        </>
    )
}
