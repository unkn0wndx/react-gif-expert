//^ Archivos de Barril, esto optimiza las exportaciones, e.g.:
//* Exportas uno por uno
//import { AddCategory} from './components/AddCategory';
//import { GifGrid} from './components/GifGrid';
//* Exportas todos en uno solo
// import { AddCategory, GifGrid } from './components';
//^ cuando hace la referencia al './components' hagarrar el archivo 'index.js', asi funcion JavaScript

export * from './AddCategory';
export * from './GifGrid';
export * from './GifItem';