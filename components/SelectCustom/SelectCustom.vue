<template>
  <div class="relative">
    <div
      class="pr-6 w-full bg-white transition-property-all transition-duration-250 relative truncate"
      :class="[
        { 'rounded-b-none': opened },
        { 'cursor-pointer': !disabled },
        stylewrap
      ]"
      @click="clickOpen"
      ref="dropdownMenu"
    >
      {{ nameSelected | firstCapital }}
      <p
        class="absolute right-0 top-0 bottom-0 w-6 flex items-center justify-center"
        v-if="!disabled"
      >
        <span
          class="border-r-2 border-b-2 p-1 transition-property-all transition-duration-250"
          :class="[{ '-rotate-135': !opened, 'rotate-45': opened }, styleicon]"
        ></span>
      </p>
    </div>
    <transition name="slide-y">
      <div
        id="scrollbar"
        class="vb z-100 left-0 right-0 overflow-y-auto"
        v-bar
        :class="styleoptionwrap"
        v-if="opened && !disabled"
      >
        <div>
          <ul>
            <li
              v-for="(option, index) in options"
              :key="index"
              class="cursor-pointer"
              :class="styleoption"
              @click="valueSelected = option.value"
            >
              <span>{{ option.name | firstCapital }}</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "select-custom",
  data() {
    return {
      valueSelected: this.value,
      opened: false
    };
  },
  props: {
    value: {
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: "",
      required: false
    },
    stylewrap: {
      type: String,
      default:
        "py-1 text-blue-600 border-2 border-blue-600 rounded text-sm font-semibold",
      required: false
    },
    styleicon: {
      type: String,
      default: "border-blue-600",
      required: false
    },
    styleoptionwrap: {
      type: String,
      default: "bg-white border-blue-600 border-2 border-t-0",
      required: false
    },
    styleoption: {
      type: String,
      default:
        "p-1 text-sm font-semibold text-blue-600 text-left hover:text-white hover:bg-blue-600",
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    nameSelected() {
      return this.valueSelected
        ? this.options.find(option => option.value === this.valueSelected).name
        : this.placeholder;
    }
  },
  watch: {
    value() {
      this.valueSelected = this.value;
    },
    valueSelected() {
      this.onChange();
    }
  },
  methods: {
    onChange() {
      this.$emit("input", this.valueSelected);
    },
    documentClick(e) {
      if (!this.$refs.dropdownMenu.contains(e.target)) {
        this.opened = false;
      }
    },
    clickOpen() {
      if (!this.disabled) {
        this.opened = !this.opened;
      }
    }
  },
  created() {
    if (
      typeof document !== "undefined" &&
      (typeof process === "undefined" || !process.server)
    ) {
      document.addEventListener("click", this.documentClick);
    }
  },
  destroyed() {
    if (
      typeof document !== "undefined" &&
      (typeof process === "undefined" || !process.server)
    ) {
      document.removeEventListener("click", this.documentClick);
    }
  }
};
</script>

<style scoped>
.slide-y-leave-active,
.slide-y-enter-active {
  @apply transition-property-all transition-duration-250;
}
.slide-y-enter,
.slide-y-leave-to {
  @apply opacity-0;
  transform: translate(0, 2rem);
}
#scrollbar {
  position: absolute !important;
}
</style>
