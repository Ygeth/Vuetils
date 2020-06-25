<template>
  <div id="pugPark" clas="relative p-2">
    <h2 class="title text-2xl text-secundary font-bold">Pug Parque</h2>

    <div class="relative h-88 bg-pugGray overflow-hidden" @mousemove="followCursor">
      <div class="absolute" :style="{ top: puggyTop, left: puggyLeft }">
        <img class="h-24" :src="pugWalk" alt="Imagen cuqui de un pug" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pugWalk: require("~/assets/img/pugWalk.gif"),
    };
  },
  methods: {
    followCursor(event) {
      this.pugLeft = event.layerX;
      this.pugTop = event.layerY;
    },
  },
  computed: {
    puggyTop() {
      return this.pugTop - 48 + "px";
    },
    puggyLeft() {
      return this.pugLeft + 20 + "px";
    },
  },
};
</script>
