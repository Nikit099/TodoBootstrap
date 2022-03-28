import React, { useState } from "react";
const Counter = (props) => {
    const { value, handleIncrement, handleDecrement} = props;
    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };
    const getBageClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    

    return (
        <div>
            <span> {props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => handleIncrement(props.id)}
            >
                +
            </button>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={ () => handleDecrement(props.id)}
            >
                -
            </button>
            <button
                className='btn btn-danger btn-sm m-2'
                onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Counter;
