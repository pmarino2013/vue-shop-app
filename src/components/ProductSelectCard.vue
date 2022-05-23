<template>
  <div class="d-flex gap-2">
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="sexo"
      @click="limpiar"
      @change="cambiarSexo"
    >
      <option v-for="(dep, index) in departmen" :value="dep.sex" :key="index">
        {{ dep.sex }}
      </option>
    </select>
    <select class="form-select" aria-label="Default select example">
      <option v-for="(st, index) in estilo" :value="st" :key="index">
        {{ st }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ["response"],
  props: {
    sexo: String,
    limpiar: Function,
    departmen: Array,
    estilo: Array,
  },
  methods: {
    cambiarSexo() {
      this.$emit("response", this.sexo);
    },
  },
};
</script>

<style></style>
