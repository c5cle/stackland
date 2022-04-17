<script setup lang="ts">
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <div class="scene">
      <RouterView />
    </div>
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Scene Layout]
    </div>
  </main>
</template>

<style scope>
.scene {
  height: 500px;
  background: #eee;
  perspective: 3750px; /* 透视距离 */
}
</style>
