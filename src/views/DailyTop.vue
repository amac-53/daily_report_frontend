<!-- Top Page -->
<template>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3" v-for="card in all_data">
          <DailyContent :image="getThumbnail(card['evaluation'])" :id="card['id']">{{ card['date'] }}</DailyContent>
        </div>
      </div>
    </div>
</template>
    
<script lang="ts">
import { onMounted, defineComponent, ref, reactive } from "vue"
import DailyContent from "../components/DailyContent.vue"
import axios from "axios"

export default defineComponent({
    components: {
            DailyContent
    },
    setup() {
        const all_data = ref([]);

        const getAllData = () => {
            axios.get("http://35.78.97.7/daily")
                .then(response => (all_data.value = response.data))
                .catch(error => console.log(error))  
        }

        const getThumbnail = (evaluation: number): string => {
            if (evaluation < 50) {
                return "../../public/crying.png";
            }
            else if (50 <= evaluation && evaluation  < 70) {
                return "/smiling.png";
            }
            else {
                return "../../grinning.png";
            }
        }

        onMounted(() => {
            getAllData();
        })

        return {
            all_data,
            getThumbnail
        }
    }
})
</script>