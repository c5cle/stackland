<script setup lang="ts">

const props = defineProps({
  progress: {
    type: Number,
    default: 0,
    validator(val: number) {
      return val >= 0
    },
  },
})

const el = ref<HTMLInputElement | null>(null)
const show = ref(false)
const id = ref(null)
const progress = ref(props.progress)

const getWidth = () => {
  return progress.value / props.progress * 100
}

const setShow = (state: boolean) => {
  show.value = state
  // el.value.dataset.show = show.value.toString()
}

onMounted(() => {
  setShow(false)
  if (props.progress > 0) {
    setShow(true)
    id.value = setInterval(() => {
      progress.value = progress.value - 1
      if (progress.value < 0) {
        clearInterval(id)
        setShow(false)
      }
    }, 1000)
  }
})

onBeforeUnmount(() => {
  setShow(false)
  clearInterval(id)
})

</script>

<template>
  <div v-if="show" ref="el" class="progress" h="3.5" bg-gray-100 dark:bg-gray-900 border-4 absolute>
    <div
      :style="'width:' + (getWidth()) + '%'"
      transition-all ease-in-out
      h-full bg-gray-900 dark:bg-gray-100
    />
  </div>
</template>

<style scope>
.progress {
  left: -5%;
  top: -23px;
  width: 110%;
}
</style>
