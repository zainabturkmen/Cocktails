import {hideLoading} from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrinks = (drink) => {
    hideLoading();
    
    console.log(drink);
};

export default displayDrinks;