import React from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className={style.container}>
      <input className={style.input} type='text' placeholder='Ciudad...'/>
      <button className={style.btn} onClick={() => onSearch('Buscando ciudad...')} >Agregar</button>
    </div>
  )
};