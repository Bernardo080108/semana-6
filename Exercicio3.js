import { useState } from "react"

const Exercicio3 = () => {
    
    const [counter, setCounter] = useState(0)
    
    const hanleIncrement = (event) => {
        setCounter(counter + 1);
     }
    

    const hanleDecrement = (event) => {
        setCounter(counter - 1)
    }

return(
    <div>
        <span>{counter}</span>
        <botton onClick={hanleIncrement} >+</botton>
        <botton onClick={hanleDecrement}>-</botton>
    </div>
)

}

export default Exercicio3