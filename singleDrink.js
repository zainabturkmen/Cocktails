
import fetchDrinks  from "./src/fetchDrinks.js";
import displayDrinks from "./src/displaySingleDrink.js";

const presentDrink = async () => {
    fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`)
};

window.addEventListener("DOMContentLoaded", presentDrink);