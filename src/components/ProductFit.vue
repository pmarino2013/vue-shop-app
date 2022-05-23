<template>
  <div v-if="sexo !== 'Kids'" class="mt-3">
    <h5 class="fw-bold">SELECT YOUR FIT</h5>
    <button
      v-for="(f, index) in fit"
      class="btn btn-fit me-3 btn-lg mb-2"
      :class="f.status ? 'btn-dark' : 'btn-outline-dark'"
      :key="index"
      @click="fitToggle"
    >
      ${{ f.price }} <br />{{ f.fit }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    sexo: String,
    fit: Array,
    fitToggle: Function,
  },
};
</script>

<style>
.btn-fit {
  width: 230px;
}
</style>
