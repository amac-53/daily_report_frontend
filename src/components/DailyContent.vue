<!-- 一覧に表示するカード情報 -->

<template>
<div class="m-4 col-3 text-center">
    <div class="card" style="width: 16rem;" @click="$router.push('/detail/' +id)">
        <img :src=image alt="">
        <div class="card-body">
            <h5 class="card-title" ><slot>Card title</slot></h5>
        </div>
    </div>
</div>
</template>

<script lang="ts">
export default {
    props: ['image', 'id']

}
</script>

