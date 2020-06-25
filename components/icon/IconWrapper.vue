<template>
  <div class="flex-col-center fill-current" :class="styleWrap">
    <span>
      <vcIcon :icon="icon"></vcIcon>
    </span>
  </div>
</template>

<script>
import vcIcon from "./Icon.vue";
export default {
  props: {
    icon: Object,
    styleWrap: { default: "w-10 text-black" }
  },
  components: {
    vcIcon
  }
};
</script>
