<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}aboutTitleInfo`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const content = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}aboutContentInfo`);
        content.value = response.data;
        console.log('Data fetched successfully:', content.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// const Box1 = [
//     {
//         projectimage: "/assets/2 (1)-B8A2iqqP.png",
//         Title: "First Growing Process",
//         Pragrap: "The first steps of growth are the seeds of potential, nurtured with patience and perseverance, blossoming into greatness.",
//     }
// ]
// const Box2 = [
//     {
//         projectimage2: "/assets/2 (1)-B8A2iqqP.png",
//         Title: "Clean code",
//         Pragrap: "Clean code is like a clean slate: organized, efficient, and a canvas for innovation.",
//     }
// ]
// const Box3 = [
//     {
//         projectimage3: "/assets/2 (1)-B8A2iqqP.png",
//         Title: "Well Documentation",
//         Pragrap: "Documentation is the roadmap to understanding, ensuring clarity, collaboration, and continuity in every journey.",
//     }
// ]
// const ProjectImage = [
//     {
//         Image: "/assets/about-3-IJuCsuGI.webp",
//         Image1: "/assets/dotted-2-Br-_d4gC.png",
//         Image2:"/assets/dotted-1-BzgGXRav.png",
//     }
// ]
</script>
<template>
    <section id="Project-area">
        <div class="container mx-auto">
            <div v-if="data && data.data" class="grid gap-x-8 gap-y-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                <div class="left-area text-4xl md:py-4 md:px-3 px-1">
                    <div class="zoom-ara">
                        <div v-for="(title, index) in data.data" :key="index">
                            <img class="lg:h-[550px] md:h-[230px] h-[200px] md:mt-20 md:ml-10 ml-5 z-30 relative rounded-full" :title="title.imageAltTag"
                                :src="IMG + title.backgroundImage" alt="">
                        </div>

                        <img class="zoom-in-out lg:h-20 h-[40px] top-0 relative -mt-[50%] lg:-mt-[90%] 2xl:-mt-[75%] md:-mt-[73%] md:ml-10 z-20" src="../assets/project/dotted-2.png" alt="">
                        <img class="zoom-in-out lg:h-[120px] md:h-[90px] h-[80px] top-0 relative lg:mt-[60%] 2xl:mt-[55%] md:mt-[49%] mt-[15%] lg:ml-[77%] 2xl:ml-[70%] md:ml-[65%] ml-[40%] z-20" src="../assets/project/dotted-1.png" alt="">

                    </div>
                </div>

                <div v-for="(about, index) in data.data" :key="index" class="right-list">
                    <h2 class="lg:text-[40px] text-[#48a1da] text-[16px] font-[600] lg:mt-[15%] mt-5 md:mt-20 md:text-[22px] px-5 lg:px-0 ">
                        {{ about.title }}</h2>
                    <p class="lg:text-[18px] text-[16px] px-5 lg:px-0 mt-[10px]">{{ about.description }}</p>

                    <div v-if="content && content.data" class="image-area px-5 lg:px-0">
                        <span v-for="(contents, index) in content.data" :key="index">
                            <img class="h-[65px] mt-14" :src="IMG + contents.image" :title="imageAltTag" alt="">
                            <h2 class="text-[20px] font-[600] text-[#48a1da] lg:ml-[15%] lg:-mt-[5rem] -mt-[4rem] ml-[22%]">
                                {{ contents.title }}</h2>
                            <p class="text-[16px] font-[400] text-[#454545] lg:ml-[15%] ml-[22%]">{{ contents.description }}</p>
                        </span>
                    </div>
                    <!-- <div v-for="(indexs, index) in Box2" :key="index" class="image-area px-5 lg:px-0">
                        <img class="h-[65px] mt-14" :src="IMG + indexs.projectimage2" alt="">
                        <h2 class="text-[20px] font-[600] text-[#48a1da] lg:ml-[15%] lg:-mt-[5rem] -mt-[4rem] ml-[22%]">
                            {{ indexs.Title }}</h2>
                        <p class="text-[16px] font-[400] text-[#454545] lg:ml-[15%] ml-[22%]">{{ indexs.Pragrap }}</p>
                    </div>
                    <div v-for="(indexs, index) in Box3" :key="index" class="image-area px-5 lg:px-0">
                        <img class="h-[65px] mt-10" :src="IMG + indexs.projectimage3" alt="">
                        <h2 class="text-[20px] font-[600] text-[#48a1da] lg:ml-[15%] lg:-mt-[5rem] -mt-[4rem] ml-[20%]">
                            {{ indexs.Title }}</h2>
                        <p class="text-[16px] font-[400] text-[#454545] lg:ml-[15%] ml-[20%]">{{ indexs.Pragrap }}</p>
                    </div> -->

                </div>
            </div>
        </div>
        <img src="../assets/homeAbout/about-3.webp" class="hidden" alt="">
        <img src="../assets/project/dotted-2.png" class="hidden" alt="">
        <img src="../assets/project/dotted-1.png" class="hidden" alt="">
        <img src="../assets/project/2 (1).png" class="hidden" alt="">

    </section>
</template>
<style scoped>
#Project-area {
    width: 100%;
    height: 850px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: top;
    z-index: -3;
    /* background-image: url(../assets/homeAbout/about-company.jpg); */
    background: #f6f7f9;
}

@keyframes zoomInOut {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.zoom-ara .zoom-in-out {
    animation: zoomInOut 4s infinite;
}

.right-list h2 {
    line-height: 50px;
}

@media all and (min-width:320px) and (max-width:780px) {
    #Project-area {
        width: 100%;
        height: 950px;
        overflow: hidden;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: top;
        z-index: -3;
        /* background-image: url(../assets/homeAbout/about-company.jpg); */
        background: #F6F7F9;
    }

    .right-list h2 {
        line-height: 30px;
    }
}
</style>