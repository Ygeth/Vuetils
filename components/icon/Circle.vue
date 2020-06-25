<template>
  <circle class="cls-1" :cx="data.cx" :cy="data.cy" :r="data.r" />
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>