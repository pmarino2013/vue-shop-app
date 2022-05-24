<template>
  <div class="d-flex mt-3">
    <button
      v-for="(talle, index) in talleToggle"
      class="btn me-3 btn-lg flex-grow-1"
      :class="talle.status ? 'btn-dark' : 'btn-outline-dark'"
      :key="index"
      @click="talleClick(index)"
    >
      {{ talle.medida }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    talleToggle: Array,
    talleClick: Function,
  },
};
</script>

<style></style>
