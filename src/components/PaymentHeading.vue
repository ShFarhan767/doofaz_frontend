<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}paymentBannerInfo`);
        data.value = response.data.data[0];  // Access the first object in the array
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <section v-if="data"
        class="Background pt-10"
        :style="{
          backgroundImage: data && data.backgroundImage ? `url(${IMG}${data.backgroundImage})` : 'none'
        }" :title="data.imageAltTag"
    >
        <div class="container mx-auto">
            <div class="Details md:pt-32 md:pb-12 text-center">
                <h2 v-if="data"
                    class="lg:text-5xl md:text-4xl text-3xl font-semibold lg:mt-0 mt-[50px] lg:px-0 px-3 text-white leading-tight">
                    {{ data.title }}
                </h2>
            </div>
        </div>
    </section>
</template>

<style scoped>
.Background {
    width: 100%;
    height: auto;
    background-size: cover;
    padding-bottom: 50px;
}
</style>