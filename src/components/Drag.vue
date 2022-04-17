<script setup lang="ts">
const props = defineProps({
  isActive: {
    type: Boolean, default: false,
  },
  preventActiveBehavior: {
    type: Boolean, default: false,
  },
  isDraggable: {
    type: Boolean, default: true,
  },
  parentLimitation: {
    type: Boolean, default: false,
  },
  snapToGrid: {
    type: Boolean, default: false,
  },
  z: {
    type: [String, Number],
    default: 'auto',
    validator(val) {
      return (typeof val === 'string') ? val === 'auto' : val >= 0
    },
  },
  dragHandle: {
    type: String,
    default: null,
  },
  dragCancel: {
    type: String,
    default: null,
  },
})
const emit = defineEmits(['clicked', 'dragging', 'dragstop', 'activated', 'deactivated'])

const addEvents = (events: Map<keyof HTMLElementEventMap, EventListener>) => {
  events.forEach((cb, eventName) => {
    document.documentElement.addEventListener(eventName, cb)
  })
}

const removeEvents = (events: Map<keyof HTMLElementEventMap, EventListener>) => {
  events.forEach((cb, eventName) => {
    document.documentElement.removeEventListener(eventName, cb)
  })
}

const stickDrag = false
const bodyDrag = false
const limits = {
  left: { min: null, max: null },
  right: { min: null, max: null },
  top: { min: null, max: null },
  bottom: { min: null, max: null },
}
const currentStick = null

</script>

<template>
  <slot />
</template>

<style scope></style>
