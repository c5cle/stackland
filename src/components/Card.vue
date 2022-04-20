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
  name: {
    type: String,
    required: true,
  },
})

const { t } = useI18n()
const el = ref<HTMLInputElement | null>(null)
const name = ref(props.name)

const getRandomTop = (dom, pDom) => {
  const min = Number(pDom.dataset.height) - Number(pDom.dataset.bodyHeight)
  const max = Number(pDom.dataset.bodyHeight) - Number(dom.offsetHeight)
  return Math.floor(Math.random() * (max + 1)) + min
}

const getRandomLeft = (dom, pDom) => {
  return Math.floor(Math.random() * (Number(pDom.dataset.width) - dom.offsetWidth + 1))
}

const initDeskData = (parentDom) => {
  if (parentDom.dataset.success !== 'true') {
    parentDom.dataset.width = parentDom.clientWidth.toString()
    parentDom.dataset.height = parentDom.clientHeight.toString()
    parentDom.dataset.bodyWidth = parentDom.dataset.width
    parentDom.dataset.bodyHeight = (parentDom.clientHeight - parentDom.firstElementChild.clientHeight).toString()
    parentDom.dataset.success = 'true'
  }
}

onMounted(() => {
  const dom = el.value
  const parentDom = dom.parentElement

  initDeskData(parentDom)

  dom.style.top = `${getRandomTop(dom, parentDom).toString()}px`
  dom.style.left = `${getRandomLeft(dom, parentDom).toString()}px`
})

</script>

<template>
  <div ref="el" class="card" filter drop-shadow-md absolute left-0 top-0 border-4 rounded-1 bg-gray-500>
    <slot name="progress">
      <CardProgress :progress="props.progress" />
    </slot>
    <div
      class="card-header" border-b-4 border-gray-700 dark:border-gray-100 w-full top-0 absolute text-left
      align-middle truncate bg-gray-400 text-gray-50 pl-1 select-none
    >
      {{ t(`card.${name}`) }}
    </div>
    <div class="card-content">
      <div class="card-content-item" w="1/2" pb="1/2" absolute rounded-full bg-gray-400 top="2/5" left="1/4" />
      <div class="card-content-price" object-none object-left-bottom />
      <div class="card-content-num" object-none object-right-bottom />
    </div>
    <div
      class="card-adsorb" border-gray-50 dark:border-gray-50 absolute border-dashed rounded-1 left="-3" top="-3" p-4
    />
  </div>
</template>

<style scope>
.card {
  width: 7%;
  padding-bottom: calc(7% * 5 / 4);
}

.card-adsorb {
  width: calc(100% + 1.5rem);
  height: calc(100% + 1.5rem);
}
</style>
