import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Star Wars']);

  //* Agrega una nueva categoria a las categorias ya existentes
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={event => onAddCategory(event)}//* CallBack que tiene como argumento el valor dado en el 'inputValue' y despues se ejecuta una funcion que agrega el valor a las nuevas categorias
      />

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }

    </>
  )
}
