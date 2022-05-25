<template>
  <button type="button" class="btn btn-dark">
    <i class="fa fa-shopping-cart fa-2x me-2" aria-hidden="true"></i>
    <span class="badge bg-secondary fs-5">{{ store.count }}</span>
  </button>
</template>

<script>
import { store } from "../data/store.js";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style></style>
