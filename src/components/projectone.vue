<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';


const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}ourProjectInfo`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

</script>
<template>
    <section class="Background bg-[gray] pt-10">
        <!-- ====================Headding-area==================== -->
        <div class="container mx-auto">
            <div class="text-center">
                <h2 class="lg:text-5xl md:text-4xl text-5xl font-bold lg:mt-[200px] mt-[100px] lg:px-0 px-3 text-[#f47621] leading-tight">
                    Our Projects
                </h2>
            </div>
        </div>
        <!-- ====================Headding-area End==================== -->
    </section>


    <section v-if="data && data.data" class="px-10 pt-5 pb-5">
        <div class="grid gap-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div v-for="(project, index) in data.data" :key="index" class="p-4">
                <div class="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 border-[#aaa]">
                    <a :href="project.link" target="_blank" class="block">
                        <!-- Image Section -->
                        <div class="relative py-4 border-b-4 border-[#48a1da] mx-auto">
                            <img class="w-11/12 h-28 bg-cover rounded-t-lg transition-transform duration-300 hover:scale-105 mx-auto" 
                                :src="IMG + project.image" alt="">
                        </div>

                        <!-- Content Section -->
                        <div class="p-5">
                            <h2 class="text-start font-bold text-2xl text-[#48a1da] hover:text-[#0056b3] transition-colors">
                                {{ project.name }}
                            </h2>
                            <p class="text-gray-700 text-base pt-2 pb-4 font-semibold">
                                {{ project.description }}
                            </p>
                            <div class="text-end">
                                <span class="text-[#48a1da] font-semibold text-sm">Checkout The Project →</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>


</template>
<style scoped>
.Background {
    width: 100%;
    background: url(../assets/company/Top-10-Software-Company-in-Bangladesh.jpg) no-repeat;
    background-size: cover;
    padding-bottom: 90px;
}
</style>