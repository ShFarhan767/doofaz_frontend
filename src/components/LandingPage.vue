<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);
const title = ref("");
const description = ref("");
const buttonName = ref("");
const image = ref("");

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}landingPageTitleInfo`);
        if (response.data?.data?.length) {
            const landingPageData = response.data.data[0]; // Assuming you only need the first item
            title.value = landingPageData.title;
            description.value = landingPageData.description;
            buttonName.value = landingPageData.buttonName;
            image.value = landingPageData.image;
        }
        console.log('Data fetched successfully:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const smoothScrollToBenefits = () => {
    const benefitsSection = document.getElementById('Benefits');
    benefitsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });

    console.log("Scrolling to benefits section...");
};

const landingBenefitTitles = ref(null);
const landingBenefits = ref([]);

onMounted(async () => {
    try {
        // Fetch Landing Benefit Titles
        const titleResponse = await axios.get(`${BASE_URL}landingBenefitTitleInfo`);
        if (titleResponse.data && titleResponse.data.data.length > 0) {
            landingBenefitTitles.value = titleResponse.data.data[0]; // Get first object from the array
        }
        console.log('Landing Benefits Title fetched successfully:', landingBenefitTitles.value);

        // Fetch Landing Benefits
        const benefitsResponse = await axios.get(`${BASE_URL}landingBenefitsInfo`);
        if (benefitsResponse.data && benefitsResponse.data.data) {
            landingBenefits.value = benefitsResponse.data.data.sort((a, b) => a.position - b.position);
        }
        console.log('Landing Benefits fetched successfully:', landingBenefits.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <section class="pt-10 mt-24">
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-3 border-[2px] border-dashed border-[#48a1da] bg-[#48a1da29] rounded-lg px-4 gap-4">
                <div class="col-span-2">
                    <div class="py-5 flex justify-center my-5 lg:mt-10">
                        <h2 class="font-semibold lg:text-5xl text-3xl text-center">{{ title }}</h2>
                    </div>
                    <div class="lg:pb-10 flex justify-center mb-10 lg:px-10 px-4">
                        <p class="font-semibold tracking-wide lg:text-3xl text-xl text-center">{{ description }}</p>
                    </div>
                </div>
                <div class="my-auto max-h-70 mx-auto">
                    <img :src="IMG + image" class="w-full max-h-70" alt="">
                </div>
            </div>

            <div class="py-14">
                <div class="flex justify-center">
                    <button @click="smoothScrollToBenefits"
                        class="bg-[#48a1da] py-3 px-6 rounded-lg text-white font-semibold lg:text-xl text-sm hover:text-[#48a1da] hover:bg-white hover:border hover:border-[#48a1da]">
                        {{ buttonName }}
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section id="Benefits" class="bg-[#F3FBFF] py-10">
        <div>
            <h3 class="font-semibold lg:text-4xl text-2xl text-[#0f172a] text-center pb-8 lg:px-20 px-5">
                {{ landingBenefitTitles?.mainTitle }}
            </h3>
            <div class="lg:mx-20 mx-5 py-2 border-dashed border border-[#48a1da]">
                <h4
                    class="font-semibold lg:text-3xl text-lg text-[#48a1da] text-center lg:px-5 px-4 lg:py-5 py-3 lg:leading-snug">
                    {{ landingBenefitTitles?.highlightText }}
                </h4>
            </div>
            <h2
                class="font-semibold lg:text-4xl text-2xl text-[#000000] text-center pb-8 lg:px-60 px-5 lg:leading-[50px] py-5">
                {{ landingBenefitTitles?.decisionText }}
            </h2>
        </div>

        <div class="flex justify-center py-5">
            <img :src="IMG + landingBenefitTitles?.image" class="lg:w-3/5" alt="Landing Page Image" />
        </div>

        <div class="flex justify-center">
            <div>
                <h2 class="font-semibold lg:text-4xl text-2xl lg:px-0 px-2 text-center pb-8 text-[#0f172a]">
                    {{ landingBenefitTitles?.benefitsTitle }}
                </h2>
                <ul class="list-none space-y-2 lg:px-0 px-4">
                    <li v-for="benefit in landingBenefits" :key="benefit.id"
                        class="flex items-center py-2 border-b group cursor-pointer">
                        <span class="mr-2">
                            <i class="fas fa-dot-circle text-gray-600 group-hover:text-[#48a1da]"></i>
                        </span>
                        <span class="lg:text-lg text-sm text-gray-800 font-medium">{{ benefit.landingBenefits }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Caveat:wght@400..700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Hind+Siliguri:wght@300;400;500;600;700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Patrick+Hand&display=swap');

section{
    font-family: "Hind Siliguri", sans-serif;
}
</style>