import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //^ <React.StrictMode> se usa para identificar codigo viejo, componentes con problemas en el lifecycles, lo puedes quitar en 'Produccion'
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
