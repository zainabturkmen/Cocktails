import {hideLoading} from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrinks = (data) => {
    hideLoading();

    const drink = data.drinks[0];
    const {strDrinkThumb:image, strDrink:name, strInstructions:desc} = drink;
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ]
};

export default displayDrinks;