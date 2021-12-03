<template>
  <div id="nav">
    <router-link to="/">Início</router-link> -
    <router-link to="/basket"
      >Carrinho ({{ this.productsInBag.length }})</router-link
    >
  </div>
  <router-view />
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.loadProducts();
    this.loadBag();
  },
  computed: {
    ...mapState("products", {
      productsInBag: "productsInBag",
    }),
  },
  methods: {
    ...mapActions("products", {
      loadProducts: "loadProducts",
      loadBag: "loadBag",
    }),
  },
};
</script>
