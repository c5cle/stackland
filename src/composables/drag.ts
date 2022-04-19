import type { BindingMetadata } from 'vue/compiler-sfc'

export const vDrag = {
  name: 'v-drag',
  created(el: HTMLDivElement, binding: BindingMetadata) {
    console.log('v-drag created')
    console.log('binding:', binding.value)

    // const dom = el.getElementsByClassName('card')[0]
    // console.log(dom)

    // const data = binding.value
    // if(typeof data.arg == 'undefined') {

    // }
    // el.nextElementSibling
  },
  mounted(el: HTMLDivElement) {
    el.onmousedown = (ev) => {
      el.dataset.drag = 'true'

      document.querySelectorAll<HTMLDivElement>('.card').forEach((card) => {
        // find cards type to open adsorb
        if (card.dataset.drag !== 'true')
          card.lastElementChild.classList.add('border-4')
      })

      const mouseXStart = ev.clientX
      const mouseYStart = ev.clientY
      el.style.zIndex = '9999'

      const rectLeft = el.offsetLeft
      const rectTop = el.offsetTop
      document.onmousemove = (e) => {
        // 鼠标移动的位置
        const mouseXEnd = e.clientX
        const mouseYEnd = e.clientY
        const moveX = mouseXEnd - mouseXStart + rectLeft
        const moveY = mouseYEnd - mouseYStart + rectTop
        el.style.top = `${moveY}px`
        el.style.left = `${moveX}px`
      }
      document.onmouseup = () => {
        el.dataset.drag = 'false'
        document.querySelectorAll<HTMLDivElement>('.card').forEach((card) => {
        // find cards type to open adsorb

          if (card.dataset.drag !== 'true')
            card.lastElementChild.classList.remove('border-4')
        })
        el.style.zIndex = '0'
        document.onmousemove = null
      }
    }
  },
}
