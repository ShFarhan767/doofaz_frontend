<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const data = ref(null);

// Fetch the API data on mount
onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}industryInfo`);
        data.value = response.data; // Access the first item in the data arra
        console.log('Data Fetched Successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});


const content = ref(null);

// Fetch the API data on mount
onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}industryContentInfo`);
        content.value = response.data; // Access the first item in the data arra
        console.log('Data Fetched Successfully:', content.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// const industryTitle = ref({
//     title: 'Industry We Serve',
//     subTitle : 'Bridge Your Business with the Virtual World'
// })

// const industriesImg = ref([
//     {
//         image: '/assets/automotive-C3e3-XHe.png',
//         imageTitle: 'FinTech'
//     },
//     {
//         image: '/assets/Sub-Sectors-B708RWKz.png',
//         imageTitle: 'Healthcare'
//     },
//     {
//         image: '/assets/Ecommerce-360x360-Cfv7mTW1.jpg',
//         imageTitle: 'Commerce'
//     },
//     {
//         image: '/assets/images-C1gbF2AX.png',
//         imageTitle: 'Automotive'
//     },
//     {
//         image: '/assets/education-D_JnNMxs.png',
//         imageTitle: 'Education'
//     },
//     {
//         image: '/assets/real-estate-DvJnCNPL.png',
//         imageTitle: 'Real Estate'
//     },
//     {
//         image: '/assets/hospital-BNPhXYkv.png',
//         imageTitle: 'Hospitality'
//     },
//     {
//         image: '/assets/rmg-Cz_OpJUN.png',
//         imageTitle: 'Rmg'
//     },
//     {
//         image: '/assets/pharmacy-Ci0WXNKu.png',
//         imageTitle: 'Pharmacy'
//     },
//     {
//         image: '/assets/aviation-BG5swoV1.png',
//         imageTitle: 'Aviation'
//     },
//     {
//         image: '/assets/ui-ux-BMCg-wPB.png',
//         imageTitle: 'UI/Ux'
//     },
//     {
//         image: '/assets/more-nV0FVLbl.png',
//         imageTitle: 'Many More'
//     },
// ])
</script>
<template>
    <section class="Industry-Area bg-[#48a1da] h-auto overflow-hidden">
        <div class="container mx-auto lg:px-20 md:20 px-14">
            <div v-if="data && data.data">
                <div v-for="(heading , index) in data.data" :key="index" class="text-center mb-5">
                    <h2 class="fs-1 fw-bold wow fadeInUp font-[700] text-[47px] lg:mt-28 overflow-hidden text-white"
                        style="visibility: visible; animation-name: fadeInUp;">
                        {{ heading.title }}
                        <!-- <span class="animate-text text-[#fff]">{{ indexs.TitleWe }}</span> -->
                    </h2>
                    <p class="font-[500] text-[#333]">{{ heading.shortTitle }}</p>
                </div>
            </div>

            <div v-if="content && content.data" class="grid gap-x-4 gap-y-4 py-16 lg:grid-cols-6 md:grid-cols-3 grid-cols-1">
                <div v-for="(contents , index) in content.data" :key="index" class="bg-[#fff] hover:bg-[#d8f3d3] ">
                    <div class="flex justify-center">
                        <img class=" mt-5 max-w-20 max-h-20" :src="IMG + contents.imageUrl" :title="contents.imageAltTag" alt="">
                    </div>
                    <h2 class="text-center text-[20px] font-[500] text-[#48a1da] py-5">{{ contents.imageTitle }}</h2>
                </div>
                <!-- <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class=" mt-5 w-[100px] ml-[21%]" :src="IMG +indexs.health" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textHe }}</h2>
                </div>
                <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class=" mt-5 w-[100px] ml-[21%]" :src="IMG +indexs.commerce" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textCo }}</h2>
                </div>
                <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class=" mt-5 w-[100px] ml-[21%]" :src="IMG + indexs.automotive" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textAu }}</h2>
                </div>
                <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class=" mt-5 w-[100px] ml-[21%]" :src="IMG +indexs.education" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textEd }}</h2>
                </div>
                <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class=" mt-5 w-[100px] ml-[21%]" :src="IMG +indexs.real" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textRe }}</h2>
                </div>
                <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class=" mt-5 w-[100px] ml-[21%]" :src="IMG + indexs.hospital" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textHo }}</h2>
                </div>
                <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class=" mt-5 w-[100px] ml-[21%]" :src="IMG +indexs.rmg" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textRm }}</h2>
                </div>
                <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class=" mt-5 w-[100px] ml-[21%]" :src="IMG +indexs.pharmacy" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textPh }}</h2>
                </div>
                <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class=" mt-5 w-[100px] ml-[21%]" :src="IMG +indexs.aviation" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textAv }}</h2>
                </div>
                <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class=" mt-5 w-[100px] ml-[21%]" :src="IMG +indexs.ui" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textUi }}</h2>
                </div>
                <div class="bg-[#fff] hover:bg-[#d8f3d3]">
                    <img class="mt-5 w-[100px] ml-[21%]" :src="IMG +indexs.many" alt="">
                    <h2 class="text-center font-[500] text-[#48a1da] text-[20px] py-5">{{ indexs.textMa }}</h2>
                </div> -->
            </div>
        </div>
    </section>
</template>