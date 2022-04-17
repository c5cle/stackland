<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>

<template>
  <main class="text-center text-gray-700 dark:text-gray-200">
    <div class="scene" w-full h-full perspective="3750" absolute>
      <RouterView />
    </div>
    <Footer />
  </main>
</template>

<style scope>

</style>
