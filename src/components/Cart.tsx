import { useState } from 'react';

// Update the cart object items of id 1 to show a quantity 2 with a button click
const Cart = () => {
    const [cart, setCart] = useState({
        discount: 0.1,
        items: [
            { id: 1, title: 'Product 1', quantity: 1 },
            { id: 2, title: 'Product 2', quantity: 1 }
        ]
    });

    const handleClick = () => {
        setCart(prevCart => ({
            ...prevCart,
            items: prevCart.items.map(item =>
                item.id === 1 ? { ...item, quantity: 2 } : item
            )
        }));
    };

    return (
        <div>
            <h2>Cart</h2>
            <p>Discount: {cart.discount * 100}%</p>
            <ul>
                {cart.items.map(item => (
                    <li key={item.id}>
                        {item.title} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>
            <button onClick={handleClick}>Update Cart</button>
        </div>
    );
};

export default Cart;
