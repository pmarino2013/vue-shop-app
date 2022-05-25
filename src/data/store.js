import { reactive } from "vue";

export const store = reactive({
  count: 0,
  addCount() {
    this.count++;
  },
});
