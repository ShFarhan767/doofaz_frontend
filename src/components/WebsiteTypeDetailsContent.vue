<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';  // Import useRoute to access route parameters
import axios from 'axios';
import { IMG } from '../assets/imageUrl';  // Assuming IMG holds the base URL for the images
import { BASE_URL } from '../assets/apiConfig';  // Assuming BASE_URL is the base URL for your API

const websiteTypeData = ref([]);
const route = useRoute();  // Get the current route

// Function to fetch website type details based on the slug
const websiteTypeDetails = async () => {
    const slug = route.params.slug;  // Get the slug from route parameters
    try {
        // Make sure to correctly insert the slug into the URL
        const response = await axios.get(`${BASE_URL}websiteTypeDetailsInfo/${slug}`);  // Use the slug in the API call
        // Filter and sort the data based on frontendShowStatus and dataPosition
        websiteTypeData.value = response.data.data 
            .sort((a, b) => a.dataPosition - b.dataPosition);  // Sort by dataPosition
        console.log('Data fetched and sorted successfully:', websiteTypeData.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const data = ref(null);

onMounted(async () => {
    const slug = route.params.slug;  // Get the slug from route parameters
    try {
        const response = await axios.get(`${BASE_URL}websiteTypeInfo/${slug}`);  // Use the slug in the API call
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const websiteType = ref(null);

// Function to fetch the website type box data
const websiteTypeBox = async () => {
    try {
        const response = await axios.get(`${BASE_URL}websiteTypeInfo`);
        websiteType.value = response.data;
        console.log('Data fetched successfully:', websiteType.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Watch for changes in the route parameters (slug)
watch(
    () => route.params.slug,
    (newSlug) => {
        if (newSlug) {
            websiteTypeBox(newSlug);
            websiteTypeDetails(newSlug);
        }
    }
);

onMounted(() => {
    websiteTypeBox();
    websiteTypeDetails();
});
</script>

<template>
    <div v-if="websiteTypeData && websiteTypeData.length">
        <!-- Iterate through the sorted websiteTypeData array -->
        <section v-for="(item, index) in websiteTypeData" :key="index"
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
                            <h3 class="title lg:text-3xl text-2xl font-semibold tracking-wide py-5 mx-3">{{ item.title }}</h3>
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
                    <p class="lg:text-lg text-[#333333] font-medium pb-10 mx-2 text-base" v-html="item.description"></p>
                </div>
            </div>
        </section>

        <section>
            <div class="container mx-auto">
                <div class="flex justify-center lg:mt-10 mt-5">
                    <h2 class="py-2 text-white text-3xl font-medium text-center w-auto px-4 bg-[#48A1DA] rounded">Related Website Type</h2>
                </div>
                <div v-if="websiteType && websiteType.data"
                    class="grid lg:gap-x-8 gap-4 lg:gap-y-7 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mt-[30px] py-6">
                    <!-- Show only items where frontendShowStatus is "enable" -->
                    <RouterLink :to="item.linkUrl"
                        v-for="(item, index) in websiteType.data.filter(item => item.id !== parseInt(route.params.id) )"
                        :key="index">
                        <div
                            class="border-[2px] h-auto rounded-[10px] cursor-pointer hover:bg-[#f1f1f1] shadow-lg pb-5 text-center hover-card">
                            <div class="flex justify-center">
                                <img class="w-full lg:min-h-[200px] lg:max-h-[200px] rounded-t-[10px]"
                                    :src="IMG + item.imageUrl" :title="item.imageAltTag" alt="">
                            </div>
                            <h2
                                class="text-center font-[700] lg:text-lg text-sm py-5 text-[#4f5b6d] hover-card-title">
                                {{ item.title }}
                            </h2>
                            <div class="relative bottom-0 left-0 right-0 flex justify-end pt-10">
                                <RouterLink :to="item.linkUrl"
                                    class="lg:text-[16px] font-medium text-sm text-[#00ADE7] py-2 px-4 border border-[#00ADE7] border-r-0 rounded-l-full hover-btn">
                                    Explore More
                                    <span class="arrow">→</span>
                                </RouterLink>
                            </div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </section>

    </div>
</template>