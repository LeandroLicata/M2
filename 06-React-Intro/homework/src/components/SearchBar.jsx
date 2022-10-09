import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
  <div>
    <input type='text' placeholder='Ciudad...'/>
    <button onClick={()=>onSearch('Buscando ciudad...')}>Agregar</button> 
  </div>
  )
};