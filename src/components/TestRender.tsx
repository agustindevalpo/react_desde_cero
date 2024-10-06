import { useEffect } from "react"

interface TestRenderProps {
    render: boolean;
}

/* 
Si el valor no cambia , no e snecesario hacer un Render
*/
export const TestRender = ({render}:TestRenderProps) => {
    useEffect(() => {
        console.log("TestRender");
    },[render]);
    return (
        <>
          <div>TestRender:</div>
          {JSON.stringify(render)}
        </>
    )
}