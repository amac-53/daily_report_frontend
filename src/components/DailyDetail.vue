<!-- 詳細ページの中身 -->

<template>
<h1>{{title}}</h1>
</template>

<script lang="ts">
import axios from "axios"
import { RouterLink, RouterView } from "vue-router";

export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    mounted() {
        const path = this.$route.params
        console.log(this.$route.params)
    }
}
</script>