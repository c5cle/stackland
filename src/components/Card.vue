<script setup lang="ts">
import CardProgress from './CardProgress.vue'

const props = defineProps<{
  progress: number // 总进度时间 /s
}>()
const progress = props.progress
</script>

<template>
  <div
    class="card"
    absolute
    border-4 rounded-1
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
  top: 40%;
  left: 10%;
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
