import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  //* Evita que haga peticiones de todos las categorias ya almacenadas cada vez que se renderiza el componente, con esto solo hara una peticion por cada nueva categoria
  useEffect(() => {
    getImages();
  }, [])

  return {
    images,
    isLoading
  }
}
