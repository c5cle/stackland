<script setup lang="ts">
import Table from '../components/Table.vue'
import { vDrag } from '../composables'
import Card from '~/components/Card.vue'
</script>

<template>
  <Table>
    <template #header>
      <div />
    </template>
    <template #body>
      <Card v-drag :progress="10" name="coin" />
      <Card v-drag name="coin" />
      <Card v-drag name="coin" />
      <Card v-drag name="coin" />
      <Card v-drag="{flag: 'draggable'}" name="stone" />
    </template>
  </Table>
</template>
<route lang="yaml">
meta:
  layout: Home
</route>
