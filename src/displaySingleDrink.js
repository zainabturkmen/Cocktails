import {hideLoading} from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrinks = (data) => {
    hideLoading();

    const dirnk = data.drinks[0];
    const {strDrinkThumb:image, strDrink:name, strInstructions:desc} = dirnk;
    console.log(dirnk);
};

export default displayDrinks;