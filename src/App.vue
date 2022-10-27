<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import DailyHeader from "./components/DailyHeader.vue";

</script>

<template>
<div class="total_">
  <DailyHeader />
  <RouterView />
</div>
</template>

<style>
.total_ {
  height: 100vh;
  background-color: #e9e1d1;
}
</style>

