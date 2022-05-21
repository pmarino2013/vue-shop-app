<template>
  <div class="col-12 col-md-6">
    <div class="card">
      <div class="card-body">
        <img
          src="https://cdn-images.threadless.com/threadless-media/artist_shops/shops/vue/products/195796/shirt-1490420513-abd7b25b157f3450ce8c2a09ee51c36e.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTUwOC44NTcxNDI4NTcxNDI3XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs2NDRdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvM2RmMjAzNDk1NGU0YzdlMTFhYmQ2NTc5NTRjZDQzZTcvZnJvbnQtMTU3MTMyODM4Ni1lZTg1NTlhN2Y1OGUxZDA0ZTU0M2MwNGJhMTVjM2ZjNS5wbmciXSwgeyJ5IjogNDgwLCAieCI6IDY4MSwgImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFtdLCB7IndpZHRoIjogMzUwLCAic3R5bGUiOiAiQ1JPUCIsICJoZWlnaHQiOiAzNTB9XSwgWyJlbmNvZGUiLCBbImpwZyIsIDg1XSwge31dXX0="
          alt="camiseta"
        />
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="d-flex justify-content-between fw-bold mb-3">
      <h3>Vue Logo</h3>

      <h3><small>$</small>{{ publishPrice() }}</h3>
    </div>
    <div class="d-flex gap-2">
      <select class="form-select" aria-label="Default select example">
        <option v-for="(dep, index) in departmen" :value="dep" :key="index">
          {{ dep }}
        </option>
      </select>
      <select class="form-select" aria-label="Default select example">
        <option v-for="(st, index) in style" :value="st" :key="index">
          {{ st }}
        </option>
      </select>
    </div>
    <div class="mt-3">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      departmen: ["Men's", "Women's", "Kids"],
      style: ["T-Shirt", "V-Neck"],
      fit: [
        { fit: "Regular", status: false, price: 22.45 },
        { fit: "Triblend", status: true, price: 28.95 },
      ],
      price: 0,
    };
  },
  methods: {
    publishPrice() {
      let precio = this.fit.find((item) => item.status === true);
      return precio.price;
    },
    fitToggle() {
      this.fit.map((item) => {
        item.status = !item.status;
      });
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
