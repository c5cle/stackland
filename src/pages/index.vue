<script setup lang="ts">
import Table from '../components/Table.vue'
import Card from '~/components/Card.vue'
</script>

<template>
  <Table>
    <template #header>
      <div />
    </template>
    <template #body>
      <Card :progress="10" />
    </template>
  </Table>
</template>
<route lang="yaml">
meta:
  layout: Home
</route>
