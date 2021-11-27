<template>
  <div class="list-cards">
    <section class="items">
      <h4>Selecione os produtos</h4>
      <div
        v-for="(product, index) in products"
        class="product"
        @click="toggleActive(product)"
        :class="{ selected: product.active }"
        v-bind:key="`${index}-list-cards__itens`"
      >
        <div class="photo">
          <img :src="product.photo" />
        </div>
        <div class="description">
          <span class="name">{{ product.name }}</span>
          <span class="price">$ {{ product.price }}</span>
          <div class="quantity-area">
            <template v-if="product.active">
              <button
                :disabled="product.quantity <= 1"
                @click.stop="product.quantity--"
              >
                -
              </button>
              <span class="quantity">{{ product.quantity }}</span>
              <button @click.stop="product.quantity++">+</button>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section class="summary" v-if="amount() > 0">
      <strong>Resumo do pedido</strong>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in products"
            v-bind:key="`${index}-list-cards__product`"
          >
            <template v-if="product.active">
              <td>{{ product.quantity + "x " + product.name }}</td>
              <td>{{ (product.quantity * product.price).toFixed(2) }}</td>
            </template>
          </tr>

          <tr>
            <th>Total</th>
            <th>{{ amount() }}</th>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "ListCards",
  data() {
    return {
      products: [],
      orderAmount: 0,
    };
  },
  mounted() {
    this.getProdcts();
  },
  methods: {
    getProdcts() {
      const self = this;
      this.axios
        .get("/json/products.json")
        .then(function (response) {
          self.products = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    toggleActive: function (item) {
      item.active = !item.active;
    },
    amount: function () {
      var amount = 0;
      this.products.forEach(function (item) {
        if (item.active) {
          amount += item.price * item.quantity;
        }
      });
      return amount.toFixed(2);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.list-cards > .items h4 {
  text-align: center;
  margin-top: 0;
  width: 100%;
}

.list-cards {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
}

.list-cards > .items {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid $lightgrey;
  padding: 20px;
  max-width: 500px;
  min-width: 300px;
  justify-content: center;
}

.items .product {
  border: 1px solid $lightgrey;
  margin: 6px;
  flex: 0 0 calc(33.333% - 24px);
  cursor: pointer;
  text-align: center;
}

.items .product.selected {
  border: 2px solid $blue-clear;
}

.items .photo img {
  max-width: 90px;
}

.items .description {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 11px;
  line-height: 15px;
}

.items .description .price {
  font-weight: bold;
  margin: 4px auto;
}

.items .description .quantity-area {
  margin: 8px auto;
  height: 14px;
}

.items .description .quantity-area button {
  width: 16px;
  height: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.items .description .quantity-area .quantity {
  font-weight: bold;
  margin: 0 4px;
}

.summary {
  background-color: rgb(245, 245, 245);
  padding: 20px;
  min-height: 200px;
  min-width: 200px;
  text-align: center;
}

.summary table {
  width: 100%;
  padding-top: 12px;
  font-size: 11px;
  margin: auto;
}

.summary table tbody tr:last-of-type th {
  border-top: 1px solid black;
  padding-top: 4px;
}
</style>
