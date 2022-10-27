<!-- 詳細ページの中身 -->

<template>
<div class="container m-5 p-4 card">
    <h1>{{date}}</h1>

    <div class="row m-4">
    <h2>研究</h2>
    <p class="fs-6"> {{research}}</p>
    </div>
    
    <div class="row m-4">
    <h2>学習</h2>
    <p> {{study}}</p>
    </div>

    <div class="row m-4">
    <h2>趣味</h2>
    <p> {{hobby}}</p>
    </div>
</div>
</template>
    
<script lang="ts">
import axios from "axios"

export default {
    data() {
        return {
            date: '',
            research: '',
            study: '', 
            hobby: ''
        }
    },
    methods: {
        getContent: async function() {
            const url = 'http://127.0.0.1:8000/daily/detail/'+ this.$route.params['id']
            const res = await axios.get(url);
            this.date = res.data['date'];
            this.research = res.data['research'];
            this.study = res.data['study'];
            this.hobby = res.data['hobby'];
        }
    },
    mounted() {
        this.getContent();
    }
}
</script>