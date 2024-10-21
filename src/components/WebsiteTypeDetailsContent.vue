<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';  // Import useRoute to access route parameters
import axios from 'axios';
import { IMG } from '../assets/imageUrl';  // Assuming IMG holds the base URL for the images
import { BASE_URL } from '../assets/apiConfig';  // Assuming BASE_URL is the base URL for your API

const websiteTypeData = ref([]);
const route = useRoute();  // Get the current route

onMounted(async () => {
    const id = route.params.id;  // Get the id from route parameters
    try {
        // Make sure to correctly insert the id into the URL
        const response = await axios.get(`${BASE_URL}websiteTypeDetailsInfo/${id}`);  // Use the id in the API call
        // Filter and sort the data based on frontendShowStatus and dataPosition
        websiteTypeData.value = response.data.data
            .filter(item => item.frontendShowStatus === 'enable')  // Optional filter based on frontendShowStatus
            .sort((a, b) => a.dataPosition - b.dataPosition);  // Sort by dataPosition
        console.log('Data fetched and sorted successfully:', websiteTypeData.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const data = ref(null);

onMounted(async () => {
    const id = route.params.id;  // Get the id from route parameters
    try {
        const response = await axios.get(`${BASE_URL}websiteTypeInfo/${id}`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <div v-if="websiteTypeData && websiteTypeData.length">
        <!-- Iterate through the sorted websiteTypeData array -->
        <section v-for="(item, index) in websiteTypeData" :key="index" 
                 :class="{'bg-[#e8ecf7]': index % 2 === 0, 'bg-white': index % 2 !== 0}" 
                 class="py-16">
            <div class="container mx-auto">
                <!-- Conditional grid layout based on withImage -->
                <div
                    :class="item.withImage === 'yes' ? 'grid lg:grid-cols-2 grid-cols-1 gap-5 items-center' : 'grid grid-cols-1 items-center'">
                    <!-- Image section: only display if withImage is 'yes' -->
                    <div v-if="item.withImage === 'yes'" :class="item.imagePosition === 'left' ? 'order-1' : 'order-2'">
                        <img :src="IMG + item.image" alt="software image" class="w-[80%] rounded-[10px]" />
                    </div>

                    <!-- Text content section -->
                    <div :class="item.imagePosition === 'left' ? 'order-2' : 'order-1'">
                        <h3 class="title text-2xl font-semibold tracking-wide py-5">{{ item.title }}</h3>
                        <p class="font-base text-[#333333] font-normal pb-10" v-html="item.description"></p>
                        <div class="mt-5">
                            <span v-if="index === 0 && data && data.data">
                                <span v-for="(button , index) in data.data" :key="index">
                                    <button class="text-xl text-white font-medium py-1 px-6 border bg-[#48a1da] rounded-full hover:text-[#48a1da] hover:border-[#48a1da] hover:bg-transparent transition-all">
                                        {{ button.price }} TK
                                    </button>
                                    <button class="text-xl text-white font-medium py-1 px-6 mx-5 border bg-[#48a1da] rounded-full hover:text-[#48a1da] hover:border-[#48a1da] hover:bg-transparent transition-all">
                                        {{ button.phoneNumber }}
                                    </button>
                                </span>
                            </span>
                            <a v-if="item.buttonLink && item.buttonName"  :href="item.buttonLink" class="text-xl text-white font-medium py-1 px-6 border bg-[#48a1da] rounded-full hover:text-[#48a1da] hover:border-[#48a1da] hover:bg-transparent transition-all">
                                {{ item.buttonName }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>