<!-- 詳細ページの中身 -->
<template>
<h1 class="m-5">{{ title }}</h1>

<div v-for="item in data">
    <div class="card p-4 m-5">
        <h2>{{ item['date'] }}</h2>
        <p> {{ item[`${title}`]}}</p>
    </div>
</div>
</template>
    
<script lang="ts">
import axios from "axios"

export default {
    data() {
        return {
            title: '',
            data: '',
            research: '',
        }
    },
    methods: {
        getContent: async function() {
            const url = 'http://127.0.0.1:8000/daily/' + this.$route.params['cat']
            const res = await axios.get(url);
            this.title = `${this.$route.params['cat']}`;
            this.data = res.data;
            // this.research = res.data['research'];
            // this.study = res.data['study'];
            // this.hobby = res.data['hobby'];
        }
    },
    mounted() {
        this.getContent();
    },
    updated() {
        this.getContent();
    }
}
</script>