<template>
  <transition name="fade" tag="div">
    <div class="w-full ml-20" v-bar>
      <div>
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container" :class="height">
              <div :class="styleContainer">
                <div class="modal-header">
                  <slot name="header">
                    <h3>{{ title }}</h3>
                  </slot>
                </div>

                <div class="modal-body">
                  <slot name="body">
                    <p>Holiwi</p>
                  </slot>
                </div>

                <div class="modal-footer">
                  <slot name="footer">
                    <div class="flex justify-center">
                      <button
                        :disabled="buttonDisabled"
                        class="btn-modal focus:outline-none mx-1 w-64"
                        @click="$emit('confirm')"
                      >{{ textAccept }}</button>
                      <button
                        class="btn-modal-inverted focus:outline-none mx-1 w-64"
                        @click="$emit('close')"
                      >{{textCancel}}</button>
                    </div>
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    height: { default: "h-1/2" },
    buttonDisabled: { default: false },
    styleContainer: String,
    title: {
      default: "This is a Modal that use TailwindCSS!"
    },
    textAccept: {
      default: "Accept"
    },
    textCancel: {
      default: "Cancel"
    }
  }
};
</script>

<style scoped>
.modal-mask {
  @apply fixed w-full h-full top-0 left-0 z-100;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-wrapper {
  @apply flex h-full justify-center;
}

.modal-container {
  @apply w-1/3 my-auto bg-white rounded border-t-4 border-red-500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.modal-header {
  @apply text-red-500 font-bold text-xl;
}

.modal-body {
  @apply pb-4;
}
.btn-modal,
.btn-modal-inverted {
  @apply bg-red-500 text-white text-xs py-2 rounded uppercase font-semibold border border-2 border-red-500 transition-duration-250;
}
.btn-modal-inverted {
  @apply bg-white text-red-500;
}

.btn-modal:hover {
  @apply bg-red-500 border-red-500;
}
.btn-modal-inverted:hover {
  @apply bg-red-500 text-white;
}

.btn-modal:disabled {
  @apply bg-gray-500 cursor-auto border-gray-600 opacity-25;
}
</style>
