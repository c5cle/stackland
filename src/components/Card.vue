<script setup lang="ts">
import CardProgress from './CardProgress.vue'

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
    validator(val: number) {
      return val >= 0
    },
  },
  left: {
    type: Number,
    default: -1,
  },
  top: {
    type: Number,
    default: -1,
  },
})

const progress = props.progress
const left = props.left < 0 ? Math.floor(Math.random() * 90 + 1) : props.left
const top = props.top < 0 ? Math.floor(Math.random() * 66 + 23) : props.top

</script>

<template>
  <div
    class="card"
    absolute
    border-4 rounded-1
    :style="{
      left: `${left}%`,
      top: `${top}%`,
    }"
  >
    <slot name="progress">
      <CardProgress v-if="progress > 0" />
    </slot>
    <div
      class="card-header"
      border-b-4 border-gray-700
      w-full top-0 absolute
      text-left align-middle truncate
      bg-gray-400 text-gray-50 pl-1 select-none
    >
      Card
    </div>
    <div
      class="card-content"
      bg-gray-500
    >
      <div
        class="card-content-item"
        w="1/2" pb="1/2" absolute
        rounded-full bg-gray-400 top="2/5" left="1/4"
      />
      <div
        class="card-content-price"
      />
      <div
        class="card-content-num"
      />
    </div>
  </div>
</template>

<style scope>

.card {
  width: 8%;
  padding-bottom: calc(8% * 5 / 4);
}

.progress {
  height: 15px;
  left: -5%;
  top: -23px;
  width: 110%;
  background-color: white;
  border-width: 4px;
}
</style>
