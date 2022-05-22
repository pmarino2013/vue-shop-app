<template>
  <div class="col-12 col-md-6">
    <div class="card">
      <div class="card-body">
        <img :src="sexToggle" alt="camiseta" />
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="d-flex justify-content-between fw-bold mb-3">
      <h3>Vue Logo</h3>

      <h3><small>$</small>{{ publishPrice() }}</h3>
    </div>
    <div class="d-flex gap-2">
      <select
        class="form-select"
        aria-label="Default select example"
        v-model="sexo"
      >
        <option v-for="(dep, index) in departmen" :value="dep.sex" :key="index">
          {{ dep.sex }}
        </option>
      </select>
      <select class="form-select" aria-label="Default select example">
        <option v-for="(st, index) in style" :value="st" :key="index">
          {{ st }}
        </option>
      </select>
    </div>
    <div v-if="sexo !== 'Kids'" class="mt-3">
      <h5 class="fw-bold">SELECT YOUR FIT</h5>
      <button
        v-for="(f, index) in fit"
        class="btn btn-fit me-3 btn-lg"
        :class="f.status ? 'btn-dark' : 'btn-outline-dark'"
        :key="index"
        @click="fitToggle"
      >
        ${{ f.price }} <br />{{ f.fit }}
      </button>
    </div>
    <div class="mt-3">
      <h5 class="fw-bold">COLOR</h5>
    </div>
    <div class="d-flex mt-3">
      <button
        v-for="(talle, index) in talleToggle"
        class="btn btn-outline-dark me-3 btn-lg flex-grow-1"
        :key="index"
      >
        {{ talle }}
      </button>
    </div>
  </div>
</template>

<script>
import { tipo } from "../data/departmen";
import { talles } from "../data/talles";
export default {
  data() {
    return {
      departmen: [...tipo],
      style: ["T-Shirt", "V-Neck"],
      fit: [
        { fit: "Regular", status: false, price: 22.45 },
        { fit: "Triblend", status: true, price: 28.95 },
      ],
      price: 0,
      sexo: "Men's",
      medidas: [...talles],
    };
  },
  methods: {
    publishPrice() {
      let precio = { price: 0 };
      if (this.sexo === "Kids") {
        precio.price = this.fit[0].price;
      } else {
        precio = this.fit.find((item) => item.status === true);
      }
      return precio.price;
    },
    fitToggle() {
      this.fit.map((item) => {
        item.status = !item.status;
      });
    },
  },
  computed: {
    sexToggle() {
      let seleccion = this.departmen.filter((dep) => dep.sex === this.sexo);

      return seleccion[0].image;
    },
    talleToggle() {
      let seleccion = this.medidas.filter((talle) => talle.sexo === this.sexo);
      return seleccion[0].talles;
    },
  },
};
</script>

<style>
.card img {
  width: 100%;
}
.btn-fit {
  width: 230px;
}
</style>
