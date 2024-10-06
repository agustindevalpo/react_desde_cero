import { useEffect, useState } from 'react'
import './App.css'
import { Test } from './components'
import { Dashboard } from './dashboard/Dashboard';

// Hook , es un trozo de lógica que representa el ciclo de vida de un componente. Es reutilizable

/* 
useffect -> Hook Sirve para poder csincronizar con entidades externas al componente(endpoint-component,etc).Genera un Render
crear -> se ejecuta-> se detiene -> se muere
*/

/* 
   Reglas:

   1) Independiente del resto
   2) Lógica ínica
  
*/

function App() {

  // Hook , useState, manejar un estado de la variable
  // Puede usar un descontructor de variables de javascript
  const [count, setCount] = useState(0);

  const fetcher = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return res.json();
  }

  const fetchInformation = async() => {
    //const result = await fetcher();
    // setCount(result);
    setCount(count + 1)
  }

  //TRIGGER-> RENDER
  useEffect( ()=> {
     console.log('hola');
     //fetchInformation()   
  }, [])
  
  // Es solo una variable en el contexto de la función , no se expone
  //let a=1;

  return (
       //Fragmentos <></>
        //Un componente no puede retornar algo que no este englobado, lo que está dentro queda contenido 
   <>
  
    <button onClick={fetchInformation}>Click</button>
       { /*Asi se comenta dentro de este  {count}* - Composition pattern 
        Esto le da independecia al código  , a este padre solo le iporta cambiar el valor de a
       */  }
       <Test> 
        <>
           {count} 
       </>
       </Test>

       <Dashboard/>
      
   </> 
  )
}

export default App
