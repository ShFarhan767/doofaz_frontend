<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const softwarePostData = ref([]);
const route = useRoute();

const softwarePostDetails = async () => {
    const id = route.params.id;
    if (!id) {
        console.error("ID is missing in route parameters.");
        return;
    }
    
    try {
        const response = await axios.get(`${BASE_URL}softwareCategoryInfo/${id}`);
        console.log("API Response:", response.data); // Log the full response

        if (response.data && response.data.data && response.data.data.length) {
            softwarePostData.value = response.data.data.sort((a, b) => a.dataPosition - b.dataPosition);
        } else {
            console.warn("API returned empty or invalid data.");
            softwarePostData.value = [];
        }
    } catch (error) {
        console.error("Error fetching data:", error.response ? error.response.data : error.message);
        softwarePostData.value = [];
    }
};

const softwareType = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}softwareCategoryInfo`);
        softwareType.value = response.data;
        console.log('Data fetched successfully:', softwareType.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

watch(
    () => route.params.id,
    (newId) => {
        if (newId) {
            softwarePostDetails();
        }
    }
);

onMounted(() => {
    softwarePostDetails();
});
</script>

<template>
    <div v-if="softwarePostData && softwarePostData.length">
        <!-- Iterate through the sorted softwareTypeData array -->
        <section v-for="(item, index) in softwarePostData" :key="index"
            :class="{ 'bg-[#e8ecf7]': index % 2 === 0, 'bg-white': index % 2 !== 0 }" class="py-16">
            <div class="container mx-auto">
                <!-- Dynamic grid layout -->
                <div :class="item.videoLink ? 'grid lg:grid-cols-2 grid-cols-1 gap-5 items-center' : 'grid grid-cols-1 items-center'">
                    
                    <!-- Image Section: Only display if withImage is 'yes' -->
                    <div v-if="item.withImage === 'yes' && !item.videoLink" class="lg:col-span-2">
                        <h3 class="title text-3xl font-semibold tracking-wide py-5">{{ item.title }}</h3>
                        <img :src="IMG + item.image" alt="software image" class="w-full lg:h-[400px] rounded" />

                        <div class="mt-5">
                            <span v-if="index === 0">
                                <button
                                    class="text-xl text-white font-medium py-1 px-6 border bg-[#252525] rounded-lg hover:text-[#252525] hover:border-[#252525] hover:bg-transparent transition-all">
                                    {{ item.price }} TK
                                </button>
                            </span>
                            <a v-if="item.buttonLink && item.buttonName" :href="item.buttonLink"
                                class="text-[21px] text-white font-medium py-1 px-6 border bg-[#252525] rounded-lg hover:text-[#252525] hover:border-[#252525] hover:bg-transparent transition-all">
                                {{ item.buttonName }}
                            </a>
                        </div>
                    </div>

                    <!-- Image with video -->
                    <template v-if="item.withImage === 'yes' && item.videoLink">
                        <!-- Image Position Handling -->
                        <div :class="item.imagePosition === 'left' ? 'order-1' : 'order-2'">
                            <h3 class="title text-3xl font-semibold tracking-wide py-5">{{ item.title }}</h3>
                            <img :src="IMG + item.image" alt="software image" class="lg:w-[95%] lg:h-[400px] rounded" />
                            
                            <div class="mt-5">
                                <span v-if="index === 0">
                                    <button
                                        class="text-xl text-white font-medium py-1 px-6 border bg-[#252525] rounded-lg hover:text-[#252525] hover:border-[#252525] hover:bg-transparent transition-all">
                                        {{ item.price }} TK
                                    </button>
                                </span>
                                <a v-if="item.buttonLink && item.buttonName" :href="item.buttonLink"
                                    class="text-[21px] text-white font-medium py-1 px-6 border bg-[#252525] rounded-lg hover:text-[#252525] hover:border-[#252525] hover:bg-transparent transition-all">
                                    {{ item.buttonName }}
                                </a>
                            </div>
                        </div>

                        <!-- Video Section -->
                        <div :class="item.imagePosition === 'left' ? 'order-2' : 'order-1'"
                            class="border-black border-4 rounded-lg mt-14">
                            <iframe width="100%" height="350" :src="item.videoLink" title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </template>

                </div>

                <!-- Text content section -->
                <div class="mt-5">
                    <p class="text-lg text-[#333333] font-medium pb-10 lg:mx-0 mx-2" v-html="item.description"></p>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <p class="text-center text-lg font-medium text-gray-500 py-10">No data available.</p>
    </div>
</template>