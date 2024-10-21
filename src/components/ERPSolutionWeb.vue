<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}websiteBannerInfo`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const websiteType = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}websiteTypeInfo`);
        websiteType.value = response.data;
        console.log('Data fetched successfully:', websiteType.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const category = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}websiteCategoryInfo`);
        category.value = response.data;
        console.log('Data fetched successfully:', category.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

</script>
<template>
    <section v-if="data && data.data">
        <div v-for="(title, index) in data.data" :key="index" class="Background bg-[gray] pt-10 2xl:w-[1000px] 2xl:pb-2"
            :title="title.imageAltTag" :style="{ backgroundImage: `url(${IMG + title.backgroundImage})` }">

            <div
                class="grid gap-x-8 gap-y-4 grid-cols-1 lg:mt-[100px] mt-[50px] lg:px-10 px-5 lg:ml-[25%] 2xl:ml-[25%]">
                <div class="content-box opacity-85 lg:w-[700px] 2xl:w-[900px] border">
                    <h2 class="text-[30px] lg:text-[35px] 2xl:text-[35px] font-[700] text-[#48a1da] text-center">
                        {{ title.title }}
                    </h2>
                    <p class="text-[18px] lg:text-[20px] font-[500] 2xl:text-[25px] text-[#68ff4a] text-center lg:pb-5">
                        {{ title.shortTitle }}
                    </p>

                    <div v-if="websiteType && websiteType.data">
                        <div class="grid gap-x-8 gap-y-4 grid-cols-2 px-2">
                            <!-- First column: Showing first 10 items where frontendShowStatus is "enable" -->
                            <div class="text-[#fff]">
                                <ul v-for="(type, index) in websiteType.data.filter(type => type.frontendShowStatus === 'enable').slice(0, 10)"
                                    :key="index" class="text-[#fff] lg:pb-2 pb-2 text-[17px]">
                                    <li class="2xl:text-[20px]">
                                        <i :class="type.iconClassName" class="text-[#48a1da]"></i>
                                        {{ type.title }}
                                    </li>
                                </ul>
                            </div>
                            <!-- Second column: Showing next 10 items where frontendShowStatus is "enable" -->
                            <div class="text-[#fff]">
                                <ul v-for="(type, index) in websiteType.data.filter(type => type.frontendShowStatus === 'enable').slice(10, 20)"
                                    :key="index" class="text-[#fff] pb-2 text-[17px]">
                                    <li class="2xl:text-[20px]">
                                        <i :class="type.iconClassName" class="text-[#48a1da]"></i>
                                        {{ type.title }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </section>

    <section class="overflow-hidden w-full lg:h-auto pb-5 bg-[#fff7ef]">
        <div class="container mx-auto pt-5 lg:pb-5">

            <div v-if="category && category.data" class="grid lg:grid-cols-4 gap-4">
                <div v-for="(categorys, index) in category.data" :key="index">
                    <button type="button"
                        class="text-white w-full bangla-font bg-[#4f0187] 2xl:text-[30px] lg:text-[18px] font-semibold rounded-lg text-sm px-3 2xl:py-4 py-3 text-center hover:bg-transparent hover:border hover:border-[#4f0187] hover:text-[#4f0187] transition-all">
                        {{ categorys.title }}
                        <i :class="categorys.iconClassName" class="text-right inline-flex"></i>
                    </button>
                </div>
            </div>

        </div>
    </section>

    <section>
        <div class="container mx-auto">
            <div v-if="websiteType && websiteType.data"
                class="grid lg:gap-x-8 gap-4 lg:gap-y-7 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:mt-[30px] py-6">
                <!-- Show only items where frontendShowStatus is "enable" -->
                <div v-for="(item, index) in websiteType.data.filter(item => item.frontendShowStatus === 'enable')"
                    :key="index"
                    class="border-[2px] h-auto rounded-[10px] cursor-pointer hover:bg-[#f1f1f1] shadow-lg lg:pb-10 pb-5 text-center hover-card">
                    <div class="flex justify-center">
                        <img class="w-full lg:min-h-[200px] lg:max-h-[200px] rounded-t-[10px]" :src="IMG + item.imageUrl"
                            :title="item.imageAltTag" alt="">
                    </div>
                    <h2 class="h-[100px] text-center font-[700] lg:text-lg text-sm py-5 text-[#4f5b6d] hover-card-title">
                        {{ item.title }}
                    </h2>
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
    </section>

</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');

.bangla-font {
    font-family: "Hind Siliguri", sans-serif;
}

.hover-card {
    position: relative;
    transition: background-color 0.3s ease;
}

.hover-card-title {
    transition: color 0.3s ease;
}

.hover-card:hover .hover-card-title {
    color: #00ADE7;
    /* Change text color on hover */
}

.hover-btn {
    position: relative;
    transition: color 0.3s ease;
}

.hover-btn .arrow {
    display: inline-block;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.hover-card:hover .arrow {
    transform: translateX(10px);
    /* Move the arrow to the right */
    opacity: 0;
    /* Fade out the arrow */
}

.Background {
    width: 100%;
    height: 650px;
    background: url(../assets/ERP/1n.jpg) no-repeat;
    background-size: cover;
    padding-bottom: 50px;
}

.content-box {
    background: black;
    box-shadow: 5px 3px 5px 0px #c5c5c5;
}

.content-box1 {
    box-shadow: 5px 0px 5px 5px #c5c5c5;
}

@media all and (min-width:320px) and (max-width:780px) {
    .content-box {
        background: black;
        box-shadow: 5px 0px 5px 5px #c5c5c5;
    }
}
</style>