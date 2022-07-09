import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {


  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    setInputValue(target.value); //* 'inputValue' recibe el valor dado en el input usando el 'setInputValue'
  }

  //^ La funcion '.trim()' elimina los espacios en blanco en ambos extremos del string
  //* La funcion se ejecutara cuando se presiones enter en el input
  const onSubmit = (event) => {
    event.preventDefault();//* Evita que el navegador se recargue
    if (inputValue.trim().length <= 1) return; //* Si el input esta vacio no ejecutara la funcion

    // setCategories(categories => [inputValue, ...categories]);//* Agrega la nueva categoria sin eliminar las categoria ya existentes
    setInputValue('');//* Se resetea el 'inputValue'
    onNewCategory(inputValue.trim());//* 'onNewCategory' recibe como argumento el valor del 'inputValue'
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={onInputChange} />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}