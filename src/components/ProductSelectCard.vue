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
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="design"
      @change="cambiarDesign"
    >
      <option v-for="(st, index) in estilo" :value="st" :key="index">
        {{ st }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  emits: ["response", "designe"],
  props: {
    design: String,
    sexo: String,
    limpiar: Function,
    departmen: Array,
    estilo: Array,
  },
  methods: {
    cambiarSexo() {
      this.$emit("response", this.sexo);
    },
    cambiarDesign() {
      this.$emit("designe", this.design);
    },
  },
};
</script>

<style></style>
