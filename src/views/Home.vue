<template>
  <div class="home">
    <list-cards msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListCards from "@/components/ListCards.vue";

export default {
  name: "Home",
  components: {
    ListCards,
  },
};
</script>
