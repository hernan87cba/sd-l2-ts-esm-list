// assert { type: "json" } ya no va
// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
import productsList from "./products.json" with { type: "json" };
export function getProductsSortedByPrice() {
    let sortedList = productsList.sort((a, b) => a.price - b.price);
    return sortedList;
}
export const productsSortedByPrice = getProductsSortedByPrice();
