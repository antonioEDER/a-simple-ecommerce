import axios from "axios";

export function loadProducts({ commit }) {
  axios.get("https://fakestoreapi.com/products").then((response) => {
    commit("loadProducts", response.data);
  });
}

export function loadBag({ commit }) {
  if (localStorage.getItem("productsInBag")) {
    commit("loadBag", JSON.parse(localStorage.getItem("productsInBag")));
  }
}

export function addToBag({ commit }, product) {
  commit("addToBag", product);
}

export function removeFromBag({ commit }, productId) {
  if (confirm("Tem certeza que deseja remover o produto do carrinho?")) {
    commit("removeFromBag", productId);
  }
}
