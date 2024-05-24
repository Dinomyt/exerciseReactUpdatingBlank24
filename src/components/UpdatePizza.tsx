import React, { useState } from 'react';


const UpdatePizza = () => {
    const [pizza, setPizza] = useState({
        name: 'King Aurthor Supreme',
        toppings: ['Mushroom', 'Onions']
    });

    const handleClick = () => {
        setPizza(prevPizza => ({
            ...prevPizza,
            toppings: [...prevPizza.toppings, 'Cheese']
        }));
    };

    return (
        <div>
            <h2>Pizza: {pizza.name}</h2>
            <p>Toppings: {pizza.toppings.join(', ')}</p>
            <button onClick={handleClick}>Add Cheese</button>
        </div>
    );
};

export default UpdatePizza;
