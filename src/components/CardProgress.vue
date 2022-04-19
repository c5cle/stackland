<script setup lang="ts">
import anime from 'animejs'

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
const progress = ref(props.progress)

const setShow = (state: boolean) => {
  show.value = state
  // el.value.dataset.show = show.value.toString()
}

onMounted(() => {
  setShow(false)
  if (props.progress > 0) {
    setShow(true)

    const change = {
      progress: progress.value,
    }

    anime({
      targets: change,
      progress: 0,
      easing: 'easeInOutExpo',
      duration: progress.value * 1000,
      update() {
        el.value.style.width = `${change.progress / (progress.value) * 100}%`
        if (change.progress === 0)
          setShow(false)
      },
    })
  }
})

onBeforeUnmount(() => {
  setShow(false)
})

</script>

<template>
  <div v-show="show" class="progress" top="-8" left="-5%" w="110%" h="3.5" bg-gray-100 dark:bg-gray-900 border-4 absolute>
    <div
      ref="el"
      transition-all ease-in-out
      h-full bg-gray-900 dark:bg-gray-100
    />
  </div>
</template>

<style scope>
</style>
