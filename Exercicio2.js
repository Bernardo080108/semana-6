const Exercicio2 = (props) => {
    const {argument} = props;
    const handleClick = argument => {
      alert(`Isso é um Argumento: ${argument}`);
    }
    return <button onClick={()=>{handleClick(argument)}}>Evento de Argumento</button>
  }
export default Exercicio2;