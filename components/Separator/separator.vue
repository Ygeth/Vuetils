<template>
  <div id="line" class="line-icon" :style="cssVars">
    <svg class="dotIcon" width="4" height="4">
      <circle :fill="colors.primary" cx="2" cy="2" r="2" id="dot" />
    </svg>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "Separator",
  data: () => ({
    colors: {
      background: "#f5f5f5",
      onBackground: "#555555",
      surface: "#ffffff",
      onSurface: "#222222",
      primary: "#1c8523",
    }
  }),
  computed: {
    // ...mapGetters({
    //   colors: "configuration/getColors",
    // }),
    cssVars() {
      return { "--border-color": this.colors.primary };
    },
  },
};
</script>

<style>
.line-icon {
  text-align: center;
}
.line-icon::before,
.line-icon::after {
  width: 45%;
  height: 1px;

  border-top: 2px solid;
  border-color: var(--border-color);

  display: inline-block;
  content: "";

  padding-top: 0.2rem;
  margin-left: 2%;
  margin-right: 2%;
}
.dotIcon {
  display: inline-block;
}
</style>