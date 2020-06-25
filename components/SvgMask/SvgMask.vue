<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" :class="styleWrap">
    <defs>
      <mask :id="idMask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
        <image :xlink:href="urlMask" height="100%" width="100%" />
      </mask>
    </defs>

    <g :mask="mascara" class="h-full w-full">
      <image x="0" y="0%" :href="urlImg" height="100%" width="100%" />
    </g>
  </svg>
</template>
<script>
export default {
  name: 'svgMask',
  props: {
    idMask: {
      type: String,
      required: true
    },
    urlImg: String,
    urlMask: String,
    styleWrap: String
  },
  computed: {
    mascara() {
      return 'url(#' + this.idMask + ')'
    }
  }
}
</script>
