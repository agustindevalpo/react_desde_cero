import { useEffect, useMemo, useState } from "react";
import { TestRender } from "../components"


export const Dashboard = () => {

    const [render, setRender] = useState(false);

    // useMemo() Para guardar valores y solo cuando el render haya cambiado
    //Ayuda a mejorar la performance de nuestros componentes.
    // Se usa para hacer cosas costosas para el componente.
    const expensiveValue = useMemo(() => {
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        console.log("Se calculó");
        return result;
    }, [render]);

    setTimeout(() => {
        setRender(true);
    }, 4000);

    useEffect(() => {
        //expensiveMethod();
        console.log("Dashboard");
    }, [render]);

    return (
        <>
            {expensiveValue}
            <TestRender render={render} />
        </>)
}