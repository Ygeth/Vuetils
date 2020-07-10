<template>
  <div class="w-1/2 p-4" :class="[answeredClass]">
    <div class="h-full shadow-md rounded-lg cursor-pointer p-4" :class="colorBox">
      <div>{{ label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: Number,
    label: String,
    payload: null
  },
  computed: {
    imSelected() {
      return this.payload && this.id == this.payload.id
    },
    solved() {
      return this.payload && this.payload.solved
    },
    answeredClass() {
      return this.solved
        ? this.imSelected
          ? 'translate-1/2 z-10 transition-duration-750 pointer-events-none'
          : 'opacity-0 pointer-events-none'
        : ''
    },
    colorBox() {
      return this.payload && this.id == this.payload.id
        ? this.solved
          ? 'bg-green-400 hover:bg-green-300 pointer-events-none'
          : 'bg-red-400 hover:bg-red-300 pointer-events-none'
        : 'bg-gray-400 hover:bg-gray-300'
    }
  }
}
</script>
