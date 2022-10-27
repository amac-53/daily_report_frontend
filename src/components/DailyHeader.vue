<script setup lang="ts">
import { RouterLink } from "vue-router";
// 親コンポーネントからカテゴリーをひきつぐ
</script>

<template>
<div class="container-flex bg-dark p-4">
    <div class="row justify-content-between">
        <div class="col-6">
            <RouterLink class="link-light" to='/'>Top</RouterLink>
        </div>
        <div class="col-2">
            <RouterLink class="px-2 link-light" to='/category/research'>研究</RouterLink>
            <RouterLink class="px-2 link-light" to='/category/study'>学習</RouterLink>
            <RouterLink class="px-2 link-light" to='/category/hobby'>趣味</RouterLink>
        </div>
    </div>
</div>
</template>