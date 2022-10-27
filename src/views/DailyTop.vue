<script lang="ts">
import DailyContent from "../components/DailyContent.vue"
import axios from "axios"

export default {
    data() {
        return {
            all_data: []
        };
    },
    methods: {
        getTimestamp: async function () {
            const response = await axios.get("http://127.0.0.1:8000/daily");
            this.all_data = response.data;
        },
        getThumbnail(evaluation) {
            if (evaluation < 50) {
                return "../../public/crying.png";
            }
            else if (50 <= evaluation && evaluation < 70) {
                return "/smiling.png";
            }
            else {
                console.log("hello");
                return "../../grinning.png";
            }
        }
    },
    mounted() {
        this.getTimestamp();
    },
    components: {
      DailyContent
    }
}
</script>

<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-3" v-for="card in all_data">
      <DailyContent :image="getThumbnail(card['evaluation'])" :id="card['id']">{{ card['date'] }}</DailyContent>
    </div>
  </div>
</div>
</template>
