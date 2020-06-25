<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="icon.viewBox"
    class="h-full mx-auto"
  >
    <component
      v-for="(element, index) in icon.elements"
      :is="`vc${element.type}`"
      :key="index"
      :data="element.data"
    />
  </svg>
</template>

<script>
import vccircle from "./Circle.vue";
import vcpath from "./Path.vue";
export default {
  props: {
    icon: Object
  },
  components: {
    vccircle,
    vcpath
  }
};
</script>
