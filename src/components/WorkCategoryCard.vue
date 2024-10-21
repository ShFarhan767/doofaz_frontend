<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

// Reactive data for software and website items
const softwareType = ref(null);
const websiteType = ref(null);
const selectedTab = ref('Software'); // Default selected tab

// Fetch Software Items
const fetchSoftwareItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}softwareTypeInfo`);
        softwareType.value = response.data;
        console.log('Software data fetched successfully:', softwareType.value);
    } catch (error) {
        console.error('Error fetching software data:', error);
    }
};

// Fetch Website Items
const fetchWebsiteItems = async () => {
    try {
        const response = await axios.get(`${BASE_URL}websiteTypeInfo`);
        websiteType.value = response.data;
        console.log('Website data fetched successfully:', websiteType.value);
    } catch (error) {
        console.error('Error fetching website data:', error);
    }
};

// Fetch data on mount
onMounted(() => {
    fetchSoftwareItems();
    fetchWebsiteItems();
});

// Handle tab change
const handleTabChange = (tab) => {
    selectedTab.value = tab;
};
</script>

<template>
    <div class="container mx-auto">
        <h2 class="lg:text-[34px] md:text-[28px] text-[20px] font-[700] text-[#00ADE7] mt-10 text-center">Boost Your
            Business Growth With DoofazIT</h2>

        <!-- Dynamic Tabs -->
        <div class="mx-6 mt-6">
            <ul class="flex justify-center flex-wrap">
                <!-- Software Tab -->
                <li @click="handleTabChange('Software')"
                    class="mr-2 bg-[#48a1da] rounded-lg shadow-xl my-2 cursor-pointer">
                    <p
                        class="inline-block text-black hover:text-white hover:bg-[#48a1da] rounded-lg py-4 px-4 lg:text-lg font-medium text-center">
                        Software
                    </p>
                </li>

                <!-- Website Tab -->
                <li @click="handleTabChange('Website')"
                    class="mr-2 bg-[#48a1da] rounded-lg shadow-xl my-2 cursor-pointer">
                    <p
                        class="inline-block text-black hover:text-white hover:bg-[#48a1da] rounded-lg py-4 px-4 lg:text-lg font-medium text-center">
                        Website
                    </p>
                </li>
            </ul>

            <!-- Display Software Items -->
            <div v-if="selectedTab === 'Software' && softwareType && softwareType.data"
                class="grid lg:gap-x-8 gap-4 lg:gap-y-7 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mt-[30px] py-6">
                <div v-for="(item, index) in softwareType.data.filter(item => item.frontendShowStatus === 'enable')"
                    :key="index"
                    class="border-[2px] rounded-[10px] cursor-pointer hover:bg-[#f1f1f1] shadow-lg text-center">
                    <div class="flex justify-center">
                        <img class="w-full lg:min-h-[200px] lg:max-h-[200px] rounded-t-[10px]" :src="IMG + item.imageUrl"
                            :title="item.imageAltTag" alt="">
                    </div>
                    <h2 class="text-center h-[100px] font-bold lg:text-lg text-sm py-5 text-[#4f5b6d] mx-5">{{ item.title }}</h2>
                    <div class="relative bottom-0 left-0 right-0 flex justify-end pb-5">
                        <RouterLink :to="`/software-details/${item.id}`"
                            class="lg:text-[16px] font-medium text-sm text-[#00ADE7] py-2 px-4 border border-[#00ADE7] border-r-0 rounded-l-full hover-btn">
                            Explore More
                            <span class="arrow">→</span>
                        </RouterLink>
                    </div>
                </div>
            </div>

            <!-- Display Website Items -->
            <div v-if="selectedTab === 'Website' && websiteType && websiteType.data"
                class="grid lg:gap-x-8 gap-4 lg:gap-y-7 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mt-[30px] py-6">
                <div v-for="(item, index) in websiteType.data.filter(item => item.frontendShowStatus === 'enable')"
                    :key="index"
                    class="border-[2px] rounded-[10px] cursor-pointer hover:bg-[#f1f1f1] shadow-lg text-center">
                    <div class="flex justify-center">
                        <img class="w-full lg:min-h-[200px] lg:max-h-[200px] rounded-t-[10px]" :src="IMG + item.imageUrl"
                            :title="item.imageAltTag" alt="">
                    </div>
                    <h2 class="h-[100px] text-center font-bold lg:text-lg text-sm py-5 text-[#4f5b6d]">{{ item.title }}</h2>
                    <div class="relative bottom-0 left-0 right-0 flex justify-end pb-5">
                        <RouterLink :to="`/website-details/${item.id}`"
                            class="lg:text-[16px] font-medium text-sm text-[#00ADE7] py-2 px-4 border border-[#00ADE7] border-r-0 rounded-l-full hover-btn">
                            Explore More
                            <span class="arrow">→</span>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>