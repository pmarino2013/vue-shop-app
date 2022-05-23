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
      <h3 class="fw-bold">Vue Logo</h3>

      <h3 class="fw-bold"><small>$</small>{{ publishPrice() }}</h3>
    </div>
    <ProductSelectCard
      :sexo="sexo"
      :limpiar="limpiar"
      :departmen="departmen"
      :estilo="estilo"
      @response="(valor) => (sexo = valor)"
    />
    <ProductFit :sexo="sexo" :fit="fit" :fitToggle="fitToggle" />

    <div class="mt-3">
      <h5 class="fw-bold">COLOR</h5>
    </div>
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
    <div class="d-grid mt-5">
      <button class="btn btn-dark py-3" :disabled="flag">ADD TO CART</button>
      <p class="mt-2">
        Free Shipping On US Orders Over $99
        <small>(excluding Shoes, Skateboards, and some Wall Art)</small>
      </p>
    </div>
    <div class="mt-5 text-center">
      <p class="fw-bold">Contacts:</p>
      <span class="me-3"
        ><i class="fa fa-facebook" aria-hidden="true"></i
      ></span>
      <span class="me-3"><i class="fa fa-twitter" aria-hidden="true"></i></span>
      <span class="me-3"
        ><i class="fa fa-pinterest-p" aria-hidden="true"></i
      ></span>
      <span class="me-3"
        ><i class="fa fa-envelope" aria-hidden="true"></i
      ></span>
    </div>
  </div>
</template>

<script>
import { tipo } from "../data/departmen";
import { talles } from "../data/talles";
import ProductSelectCard from "./ProductSelectCard.vue";
import ProductFit from "./ProductFit.vue";
export default {
  data() {
    return {
      departmen: [...tipo],
      estilo: ["T-Shirt", "V-Neck"],
      fit: [
        { fit: "Regular", status: false, price: 22.45 },
        { fit: "Triblend", status: true, price: 28.95 },
      ],
      price: 0,
      sexo: "Men's",
      medidas: [...talles],
      tallesPorDepartmen: [],
      flag: true,
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
    talleClick(id) {
      this.limpiar();
      this.tallesPorDepartmen.talles[id].status = true;
      this.flag = false;
    },
    limpiar() {
      for (
        let index = 0;
        index < this.tallesPorDepartmen.talles.length;
        index++
      ) {
        if (this.tallesPorDepartmen.talles[index].status === true) {
          this.tallesPorDepartmen.talles[index].status = false;
        }
      }
      this.flag = true;
    },
  },
  computed: {
    sexToggle() {
      let seleccion = this.departmen.filter((dep) => dep.sex === this.sexo);
      return seleccion[0].image;
    },
    talleToggle() {
      let seleccion = this.medidas.filter((talle) => talle.sexo === this.sexo);
      this.tallesPorDepartmen = seleccion[0];
      return this.tallesPorDepartmen.talles;
    },
  },
  components: { ProductSelectCard, ProductFit },
};
</script>

<style scoped>
.card img {
  width: 100%;
}

.redes {
  border-radius: 100%;
}
</style>
