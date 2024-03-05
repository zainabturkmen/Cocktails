import {hideLoading} from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrinks = (data) => {
    hideLoading();

    const drink = data.drinks[0];
    const {strDrinkThumb:image, strDrink:name, strInstructions:desc} = drink;
    const list = [
        drink.strIngredient1,
        drink.strIngredient1,
        drink.strIngredient1,
        drink.strIngredient1,
        drink.strIngredient1,
    ]
};

export default displayDrinks;