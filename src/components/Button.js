import React from 'react';
import './Button.css';

const isOperator = val => {
  return !isNaN(val) || val==="." || val ==="="
}

export const Button = props => (
  <button
    className={`button-wrapper ${
      isOperator(props.children) ? null : 'operator'
    }`}
    onClick={() => props.handleClick(props.children)}
    >{props.children}
    </button>
)
