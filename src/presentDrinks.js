import fetchDrinks from "./fetchDrinks.js";

const showDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url)

    // display drinks
    const section = await displyDrinks(data);
}

export default showDrinks;