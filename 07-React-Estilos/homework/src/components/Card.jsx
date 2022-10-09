import React from 'react';
import style from './Card.module.css'

function Card(props) {
  console.log(style)
  // acá va tu código
  //props: max, min, name, img, onClose
  return (
    <div className={style.card}>
      <button className={style.btn} onClick={props.onClose}>X</button>
      <h4>{props.name}</h4>
      <div className={style.data}>
        {/* <p>Min</p> */}
        <p>Min: {props.min}</p>
        {/* <p>Max</p> */}
        <p>Max: {props.max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='weather'/>
    </div>
  )
};

export default Card;