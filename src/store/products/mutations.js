export function loadProducts(state, products) {
  state.products = products;
}

export function loadBag(state, products) {
  state.productsInBag = products;
}

export function addToBag(state, product) {
  state.productsInBag.push(product);
  localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag));
}

export function removeFromBag(state, productId) {
  var updatedBag = state.productsInBag.filter((item) => productId != item.id);
  state.productsInBag = updatedBag;
  localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag));
}
