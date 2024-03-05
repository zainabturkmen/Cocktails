import {hideLoading} from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrinks = (data) => {
    hideLoading();

    const dirnk = data.dirnks[0];
    const {strDrinkThumb:image, strDrink:name, strInstructions} = data
};

export default displayDrinks;