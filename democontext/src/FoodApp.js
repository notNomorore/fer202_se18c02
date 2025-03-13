import React from "react";
import { CartProvider, ThemeToggle } from "./components/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import "./style.css";
import SearchFilter from "./components/SearchFood";
import ThemeToggleButton from "./components/ThemeToggleButton"; // Import ThemeToggleButton
import { ThemeProvider } from "./components/ThemeContext";

// Sample dishes array
const dishes = [
    {
        id: 0,
        name: "Uthappizza",
        image: "images/dish2.png",
        price: "4.99",
        description: "A unique combination of Indian Uthappam and Italian pizza.",
    },
    {
        id: 1,
        name: "Zucchipakoda",
        image: "images/dish1.png",
        price: "1.99",
        description: "Deep fried Zucchini with chickpea batter.",
    },
    {
        id: 2,
        name: "Vadonut",
        image: "images/dish3.png",
        price: "1.99",
        description: "A combination of vada and donut.",
    },
    {
        id: 3,
        name: "ElaiCheese Cake",
        image: "images/dish4.png",
        price: "2.99",
        description: "New York Style Cheesecake with Indian cardamoms.",
    },
];

function FoodApp() {
    return (
        <div>
            <ThemeProvider>
                <div>
                    <ThemeToggleButton />
                </div>
            </ThemeProvider>
            <CartProvider>
                <div className="FoodApp" style={{ textAlign: "center" }}>

                    <DishesList dishes={dishes} />
                    <Cart />
                </div>
            </CartProvider>

        </div>
    );
}

export default FoodApp;
