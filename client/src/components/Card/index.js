import React from 'react';
import './card.css';

const Card = props => (
  <div className="image-group">
    {console.log(props)}
    <div className="card">
      <div>{props.itemName}</div>
      <img
        id={props.id}
        alt={props.name}
        src={props.imageLink}
      />
      <form action={'/items/' + props.id} method='get'>
        <button type='submit'>Item Page</button>
      </form>
      <div>Quantity: {props.quantity}</div>
      <div>Price: US ${props.price}</div>
      <div>{props.description}</div>
    </div>
  </div>
)

export default Card;