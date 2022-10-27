<!-- 詳細ページの中身 -->
<template>
<h1 class="m-5">{{ getTitle() }}</h1>

<div v-for="item in data">
    <div class="card p-4 m-5">
        <h2>{{ item["date"] }}</h2>
        <p> {{ item[title]}}</p>
    </div>
</div>
</template>
    

<script lang="ts">
import { ref, reactive, defineComponent, onMounted, onUpdated } from "vue"
import axios from "axios"
import { useRoute } from 'vue-router'

export default defineComponent({
    setup () {  
        const title = ref('')
        const data = ref([])

        const route = useRoute()

        const getContent = () => {
            const url = 'http://127.0.0.1:8000/daily/' + route.params['cat']
            axios.get(url)
                .then(response => {
                    title.value= `${route.params['cat']}`
                    data.value = response.data
                })
                .catch(error => console.log(error))
        }
        const getTitle = () => {
            if (title.value == 'research'){
                return '研究'
            }else if(title.value == 'hobby'){
                return '趣味'
            }else{
                return '学習'
            }
        }
        onMounted(() => {
            getContent();
        })

        onUpdated(() => {
            getContent();
        })

        return {
            getTitle,
            title,
            data
        }
    }
})
</script>