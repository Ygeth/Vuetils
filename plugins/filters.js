import Vue from "vue";

export function firstCapital(value) {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

const filters = { firstCapital };
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

export default filters;
