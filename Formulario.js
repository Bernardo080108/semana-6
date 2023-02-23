import Exercicio3 from "./Exercicio3";
import { useEffect, useState } from "react";

const Form = () => {

  const [inputs, setInputs] = useState({});
  const [people, setPeople] = useState([]);

  useEffect(() =>{
    localStorage.setItem("people", JSON.stringify([...previousPeople, ...people]));
  }, [people])

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    setPeople([...people, inputs])
  }


return(
    <form onSubmit={handleSubmit}>
      <label> Name:
        <input type='text' name='Nome' onBlur={handleChange}/>
      </label>
      <br />
      <label> Age:
        <input type='number' name='Senha' onBlur={handleChange}/>
      </label>
      <br />
      <button type='submit'>Create</button>
    </form>
  );

}


export default Formulario;