<script setup lang="ts">

</script>

<template>
  <div
    class="desk"
    left="1/10"
    top="1/10"
    w="4/5"
    h="3/4"
    border-8 rounded-3
    border-solid ring-8 ring-white dark:ring-gray-700
    absolute transform-gpu rotate-x-25
  >
    <div class="desk-header" border-b-4 h="1/4">
      <slot name="header" />
    </div>
    <slot name="body" />
  </div>
</template>
