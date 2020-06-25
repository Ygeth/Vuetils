<template>
  <div ref="doubleButton" class="w-full h-full flex" :class="[positionAlign]">
    <div class="overflow-hidden whitespace-no-wrap" :class="[sizeExpanded, rounded]">
      <div
        class="h-full inline-block cursor-pointer whitespace-no-wrap"
        :class="[
          primaryColorWrap,
          primaryHover,
          divExpanded,
          styleWrap,
          { 'pointer-events-none': disabled }
        ]"
        @click="update"
      >
        <button
          class="w-full h-full px-2 border-r focus:outline-none"
          :class="[borderColorWrap, textStyle]"
          @click.stop="update"
          :disabled="disabled"
        >{{ leftText }}</button>
      </div>

      <div
        class="h-full inline-block cursor-pointer whitespace-no-wrap"
        :class="[
          secundaryColorWrap,
          secundaryHover,
          divExpanded,
          styleWrap
        ]"
        @click="update"
      >
        <button
          class="w-full h-full px-2 border-l focus:outline-none"
          :class="[borderColorWrap, textStyle]"
          @click.stop="cancel"
        >{{secundaryText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DoubleButton',
  props: {
    disabled: {
      default: false
    },
    transitionDuration: {
      default: 'transition-duration-250'
    },
    sizeExpanded: {
      default: 'w-48'
    },
    sizeNotExpanded: {
      default: 'w-24'
    },
    primaryColor: {
      default: 'bg-green-600'
    },
    styleWrap: {
      default: 'py-2 transition-duration-250'
    },
    primaryHover: {},
    secundaryColor: {
      default: 'bg-red-600'
    },
    secundaryHover: {},
    disabledColor: {
      default: 'bg-gray-500'
    },
    borderColor: {
      default: 'border-transparent'
    },
    textStyle: {
      default: 'text-white uppercase text-xs font-bold'
    },
    disabledStyle: {
      default: 'bg-gray-500'
    },
    primaryCollapsedText: {
      type: String,
      default: 'Editar',
      required: false
    },
    primaryText: {
      type: String,
      default: 'Guardar',
      required: false
    },
    secundaryText: {
      type: String,
      default: 'Cancelar',
      required: false
    },
    align: {
      default: 'right'
    },
    rounded: {
      default: 'rounded'
    }
  },
  data() {
    return {
      enabled: false
    }
  },
  computed: {
    active: {
      get() {
        return this.enabled
      },
      set: function(newValue) {
        this.enabled = newValue
      }
    },
    leftText() {
      return this.active ? this.primaryText : this.primaryCollapsedText
    },
    divExpanded() {
      return !this.active ? this.sizeExpanded : this.sizeNotExpanded
    },
    borderColorWrap() {
      return this.active
        ? 'border-white'
        : this.disabled
        ? this.disabledColor
        : this.borderColor
    },
    primaryColorWrap() {
      return this.disabled ? this.disabledColor : this.primaryColor
    },
    secundaryColorWrap() {
      return this.disabled ? this.disabledColor : this.secundaryColor
    },
    positionAlign() {
      switch (this.align) {
        case 'right':
          return 'justify-end'
        case 'left':
          return 'justify-start'
        default:
          return 'justify-end'
      }
    }
  },
  methods: {
    update() {
      this.active ? this.$emit('save') : this.$emit('edit')
      this.active = !this.active
    },
    cancel() {
      this.active = !this.active
      this.$emit('cancel')
    }
  }
}
</script>
