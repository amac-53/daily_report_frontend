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
import { ref, reactive, onMounted, defineComponent } from 'vue'
import axios from "axios"
import { useRoute } from 'vue-router'

export default defineComponent({
    setup () {
        const date = ref('')
        const research = ref('')
        const study = ref('')
        const hobby = ref('')

        const route = useRoute()
        
        const getContent = () => {
            const url = 'http://127.0.0.1:8000/daily/'+ route.params['id']
            axios.get(url)
                .then(response => {
                    date.value = response.data['date']
                    research.value = response.data['research']
                    study.value = response.data['study']
                    hobby.value = response.data['hobby']
                })
                .catch(error => console.log(error))  
        }
        onMounted(() => {
            getContent()
        })

        return {
            date,
            research,
            study, 
            hobby
        }
}})
</script>