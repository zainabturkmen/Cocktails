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
    ];
    const img = get(".drink-img");
    const drinkName = get(".drink-name");
    const description = get(".drink-desc");
    const Ingredients = get(".drink-Ingredients");
    img.src = image
    document.title = name;
    drinkName.textContent = name;
    description.textContent = desc;
    Ingredients.innerHTML = list.map((item)=>{
        if (!item) return;
        return `<li></li>`
    })
};

export default displayDrinks;